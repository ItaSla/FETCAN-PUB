"use client"

import Link from "next/link"
import { useLanguage } from "../contexts/language-context"
import "./globals.css"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section with Wall-E */}
      <header className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/walle-wallpaper.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        </div>

        {/* Floating Wall-E elements */}
        <div className="absolute top-10 left-10 floating-element">
          <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg">
            <div className="text-2xl">🤖</div>
          </div>
        </div>

        <div className="absolute top-20 right-20 floating-element" style={{ animationDelay: "1s" }}>
          <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
            <div className="robot-eye"></div>
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white p-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 cyber-text">{t("home.title")}</h1>
            <p className="text-xl md:text-2xl font-bold italic mb-6">{t("home.subtitle")}</p>

            {/* Tech grid background effect */}
            <div className="tech-grid-bg absolute inset-0 opacity-20"></div>

            {/* Animated robot eyes */}
            <div className="flex justify-center gap-4 mt-6">
              <div className="robot-eye"></div>
              <div className="robot-eye" style={{ animationDelay: "0.5s" }}></div>
              <div className="robot-eye" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Schedule Section */}
      <section className="walle-card text-center p-8 m-8 text-black text-xl">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">📅</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">{t("home.schedule.title")}</h2>
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">🤖</span>
          </div>
        </div>
        <p className="mb-6 text-gray-700">{t("home.schedule.subtitle")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 rounded-lg border-l-4 border-yellow-400">
            <span className="text-2xl mr-2">🚀</span>
            {t("home.schedule.opening")}
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg border-l-4 border-blue-400">
            <span className="text-2xl mr-2">🔬</span>
            {t("home.schedule.projects")}
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg border-l-4 border-green-400">
            <span className="text-2xl mr-2">⚡</span>
            {t("home.schedule.workshop")}
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-lg border-l-4 border-purple-400">
            <span className="text-2xl mr-2">🏆</span>
            {t("home.schedule.awards")}
          </div>
        </div>
      </section>

      {/* Participate Section */}
      <section className="walle-card text-center p-8 m-8 text-black text-xl">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg floating-element">
            <span className="text-3xl">🤖</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">{t("home.participate.title")}</h2>
        </div>
        <p className="mb-8 text-gray-700">{t("home.participate.subtitle")}</p>
        <Link href="/form">
          <button className="walle-button text-lg px-8 py-4">
            <span className="flex items-center gap-3">
              <span>⭐</span>
              {t("home.participate.button")}
              <span>⭐</span>
            </span>
          </button>
        </Link>
      </section>

      {/* Share Section with Wall-E Tech Theme */}
      <section className="walle-card text-center p-8 m-8 text-black text-xl relative overflow-hidden">
        {/* Background tech pattern */}
        <div className="absolute inset-0 tech-grid-bg opacity-10"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-3xl">📱</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{t("home.share.title")}</h2>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-3xl">🤖</span>
            </div>
          </div>
          <p className="mb-8 text-gray-700">{t("home.share.subtitle")}</p>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-300">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.origin : "",
                )}&format=png&ecc=M&margin=5`}
                alt="QR Code FETCAN"
                className="mx-auto mb-4 rounded-lg"
              />
              <p className="text-sm text-gray-600 font-bold">{t("qr.main")}</p>
            </div>

            <div className="text-left space-y-4">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg">
                <span className="text-2xl">📱</span>
                <p className="text-lg font-semibold">{t("home.share.scan")}</p>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg">
                <span className="text-2xl">📲</span>
                <p className="text-lg font-semibold">{t("home.share.install")}</p>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-lg">
                <span className="text-2xl">🌐</span>
                <p className="text-lg font-semibold">{t("home.share.offline")}</p>
              </div>
            </div>
          </div>

          <Link href="/qr-codes">
            <button className="walle-button text-lg px-8 py-4 mt-8">
              <span className="flex items-center gap-3">
                <span>📱</span>
                {t("home.share.button")}
                <span>🤖</span>
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Wall-E themed footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white text-center py-12 relative overflow-hidden">
        <div className="tech-grid-bg absolute inset-0 opacity-20"></div>
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="robot-eye"></div>
            <p className="text-lg">{t("common.footer")}</p>
            <div className="robot-eye"></div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <span className="text-2xl floating-element">🤖</span>
            <span className="text-2xl floating-element" style={{ animationDelay: "0.5s" }}>
              ⚡
            </span>
            <span className="text-2xl floating-element" style={{ animationDelay: "1s" }}>
              🚀
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
