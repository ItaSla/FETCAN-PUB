"use client"

import { useState, useRef } from "react"

export default function QRPosterGenerator() {
  const [posterData, setPosterData] = useState({
    title: "FETCAN 2025",
    subtitle: "Feira Tecnológica",
    description: "Colégio Estadual Padre José Anchieta",
    url: "",
    date: "Data do Evento",
    location: "Local do Evento",
  })
  const [posterSize, setPosterSize] = useState("A4")
  const posterRef = useRef<HTMLDivElement>(null)

  const generatePoster = () => {
    if (posterRef.current) {
      // This would generate a downloadable poster
      window.print()
    }
  }

  const downloadPoster = async () => {
    // This would create a downloadable image of the poster
    alert("Funcionalidade de download será implementada")
  }

  return (
    <div className="bg-blue-200 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Gerador de Pôster com QR Code</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
            <input
              type="text"
              value={posterData.title}
              onChange={(e) => setPosterData({ ...posterData, title: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo</label>
            <input
              type="text"
              value={posterData.subtitle}
              onChange={(e) => setPosterData({ ...posterData, subtitle: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">URL do App</label>
            <input
              type="url"
              value={posterData.url}
              onChange={(e) => setPosterData({ ...posterData, url: e.target.value })}
              placeholder="https://seu-app.vercel.app"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
            <input
              type="text"
              value={posterData.date}
              onChange={(e) => setPosterData({ ...posterData, date: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Local</label>
            <input
              type="text"
              value={posterData.location}
              onChange={(e) => setPosterData({ ...posterData, location: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tamanho</label>
            <select
              value={posterSize}
              onChange={(e) => setPosterSize(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="A4">A4 (210x297mm)</option>
              <option value="A3">A3 (297x420mm)</option>
              <option value="Letter">Letter (216x279mm)</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              onClick={generatePoster}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              🖨️ Imprimir
            </button>
            <button
              onClick={downloadPoster}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              💾 Baixar
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Pré-visualização</h3>
          <div
            ref={posterRef}
            className="bg-gradient-to-b from-purple-600 to-blue-400 text-white p-8 rounded-lg aspect-[210/297] max-h-96 overflow-hidden"
          >
            <div className="text-center h-full flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{posterData.title}</h1>
                <h2 className="text-xl mb-4">{posterData.subtitle}</h2>
                <p className="text-lg mb-6">{posterData.description}</p>
              </div>

              <div className="flex-1 flex items-center justify-center">
                {posterData.url && (
                  <div className="bg-white p-4 rounded-lg">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                        posterData.url,
                      )}&format=png&ecc=M&margin=10`}
                      alt="QR Code"
                      className="mx-auto"
                    />
                    <p className="text-black text-sm mt-2 font-medium">Escaneie para acessar</p>
                  </div>
                )}
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold">{posterData.date}</p>
                <p className="text-base">{posterData.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
