"use client"

import { useState, useEffect, useRef } from "react"

interface QRCodeGeneratorProps {
  value: string
  size?: number
  title?: string
  description?: string
  downloadable?: boolean
  className?: string
}

export default function QRCodeGenerator({
  value,
  size = 200,
  title,
  description,
  downloadable = false,
  className = "",
}: QRCodeGeneratorProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    generateQRCode()
  }, [value, size])

  const generateQRCode = async () => {
    setIsLoading(true)
    try {
      // Using QR Server API for QR code generation
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
        value,
      )}&format=png&ecc=M&margin=10`
      setQrCodeUrl(qrUrl)
    } catch (error) {
      console.error("Error generating QR code:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const downloadQRCode = async () => {
    if (!qrCodeUrl) return

    try {
      const response = await fetch(qrCodeUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `fetcan-qr-${title?.toLowerCase().replace(/\s+/g, "-") || "code"}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading QR code:", error)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      alert("Link copiado para a área de transferência!")
    } catch (error) {
      console.error("Error copying to clipboard:", error)
    }
  }

  const shareQRCode = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "FETCAN - Feira Tecnológica",
          text: description || "Confira a Feira Tecnológica do Colégio Anchieta",
          url: value,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      copyToClipboard()
    }
  }

  return (
    <div className={`bg-white rounded-lg p-6 shadow-lg ${className}`}>
      {title && <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}

      <div className="flex flex-col items-center">
        {isLoading ? (
          <div className="flex items-center justify-center" style={{ width: size, height: size }}>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
          </div>
        ) : (
          <img
            src={qrCodeUrl || "/placeholder.svg"}
            alt={`QR Code for ${title || "FETCAN"}`}
            className="rounded-lg shadow-md"
          />
        )}

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 mb-3 break-all max-w-xs">{value}</p>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={shareQRCode}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              📱 Compartilhar
            </button>

            <button
              onClick={copyToClipboard}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              📋 Copiar Link
            </button>

            {downloadable && (
              <button
                onClick={downloadQRCode}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                💾 Baixar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
