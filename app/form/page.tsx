"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "../../contexts/language-context"

export default function FormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOffline, setIsOffline] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Check if offline
    setIsOffline(!navigator.onLine)

    const handleOnline = () => setIsOffline(false)
    const handleOffline = () => setIsOffline(true)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    if (isOffline) {
      // Store form data locally for later submission
      const formDataObj = {
        nome: formData.get("nome"),
        email: formData.get("email"),
        avaliacao: formData.get("avaliacao"),
        comentarios: formData.get("comentarios"),
        timestamp: new Date().toISOString(),
      }

      // Store in localStorage
      const pendingForms = JSON.parse(localStorage.getItem("pendingForms") || "[]")
      pendingForms.push(formDataObj)
      localStorage.setItem("pendingForms", JSON.stringify(pendingForms))

      alert("Formulário salvo! Será enviado quando a conexão for restabelecida.")
      setIsSubmitted(true)
      return
    }

    try {
      const response = await fetch("https://formspree.io/f/mjkwebwd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        alert("Obrigado! Seu feedback foi enviado com sucesso!")
      }
    } catch (error) {
      // If fetch fails, treat as offline
      const formDataObj = {
        nome: formData.get("nome"),
        email: formData.get("email"),
        avaliacao: formData.get("avaliacao"),
        comentarios: formData.get("comentarios"),
        timestamp: new Date().toISOString(),
      }

      const pendingForms = JSON.parse(localStorage.getItem("pendingForms") || "[]")
      pendingForms.push(formDataObj)
      localStorage.setItem("pendingForms", JSON.stringify(pendingForms))

      alert("Formulário salvo! Será enviado quando a conexão for restabelecida.")
      setIsSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-400 text-black p-5">
      <header className="text-center text-white p-4 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">{t("form.title")}</h1>
        <p className="text-lg">{t("form.subtitle")}</p>
      </header>

      {isOffline && (
        <div className="max-w-2xl mx-auto bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-yellow-600">⚠️</span>
            <p className="text-yellow-800">{t("form.offline")}</p>
          </div>
        </div>
      )}

      <section className="max-w-2xl mx-auto bg-blue-200 p-8 rounded-lg shadow-lg">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-lg font-medium mb-2">
                {t("form.name")}
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                className="w-full p-3 bg-blue-100 border border-green-400 rounded-lg text-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                {t("form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-blue-100 border border-green-400 rounded-lg text-lg"
              />
            </div>

            <div>
              <label htmlFor="avaliacao" className="block text-lg font-medium mb-2">
                {t("form.rating")}
              </label>
              <select
                id="avaliacao"
                name="avaliacao"
                required
                className="w-full p-3 bg-blue-100 border border-green-400 rounded-lg text-lg"
              >
                <option value="excelente">{t("form.rating.excellent")}</option>
                <option value="bom">{t("form.rating.good")}</option>
                <option value="regular">{t("form.rating.regular")}</option>
                <option value="ruim">{t("form.rating.bad")}</option>
              </select>
            </div>

            <div>
              <label htmlFor="comentarios" className="block text-lg font-medium mb-2">
                {t("form.comments")}
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                rows={4}
                className="w-full p-3 bg-blue-100 border border-green-400 rounded-lg text-lg resize-vertical"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white p-4 rounded-lg text-lg font-medium transition-colors duration-300"
            >
              {t("form.submit")}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">{t("form.success")}</h2>
            <Link href="/">
              <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg">
                {t("form.back")}
              </button>
            </Link>
          </div>
        )}
      </section>

      <footer className="text-center mt-8 text-white text-sm">
        <p>{t("common.footer")}</p>
      </footer>
    </div>
  )
}
