"use client"

import QRCodeGenerator from "../../components/qr-code-generator"
import QRPosterGenerator from "../../components/qr-poster-generator"
import { useLanguage } from "../../contexts/language-context"

export default function QRCodesPage() {
  const { t } = useLanguage()

  const qrCodes = [
    {
      title: t("qr.main"),
      description: "Acesso principal ao app da FETCAN",
      url: typeof window !== "undefined" ? window.location.origin : "https://fetcan.vercel.app",
    },
    {
      title: t("qr.projects"),
      description: "Ver todos os projetos da feira",
      url: typeof window !== "undefined" ? `${window.location.origin}/projects` : "https://fetcan.vercel.app/projects",
    },
    {
      title: t("qr.schedule"),
      description: "Programação completa do evento",
      url: typeof window !== "undefined" ? `${window.location.origin}/schedule` : "https://fetcan.vercel.app/schedule",
    },
    {
      title: t("qr.contact"),
      description: "Informações de contato",
      url: typeof window !== "undefined" ? `${window.location.origin}/contact` : "https://fetcan.vercel.app/contact",
    },
    {
      title: "Formulário de Avaliação",
      description: "Avalie o evento e deixe seu feedback",
      url: typeof window !== "undefined" ? `${window.location.origin}/form` : "https://fetcan.vercel.app/form",
    },
    {
      title: "WiFi do Evento",
      description: "SSID: FETCAN_2025 | Senha: tecnologia2025",
      url: "WIFI:T:WPA;S:FETCAN_2025;P:tecnologia2025;H:false;;",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-400 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("qr.title")}</h1>
          <p className="text-xl">{t("qr.subtitle")}</p>
        </header>

        {/* QR Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {qrCodes.map((qr, index) => (
            <QRCodeGenerator
              key={index}
              value={qr.url}
              title={qr.title}
              description={qr.description}
              downloadable={true}
              size={200}
            />
          ))}
        </div>

        {/* Poster Generator Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">{t("qr.poster.title")}</h2>
          <QRPosterGenerator />
        </section>

        {/* Usage Instructions */}
        <section className="bg-blue-200 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Como Usar os QR Codes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">📱 Para Visitantes</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Abra a câmera do seu celular</li>
                <li>• Aponte para o QR code</li>
                <li>• Toque na notificação que aparecer</li>
                <li>• Acesse instantaneamente o conteúdo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">🖨️ Para Organizadores</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Baixe os QR codes clicando em "Baixar"</li>
                <li>• Imprima em materiais promocionais</li>
                <li>• Use o gerador de pôster para criar materiais</li>
                <li>• Compartilhe nas redes sociais</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-blue-200 rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Vantagens dos QR Codes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-800 mb-2">Acesso Rápido</h3>
              <p className="text-gray-600">Sem necessidade de digitar URLs longas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-gray-800 mb-2">Mobile-First</h3>
              <p className="text-gray-600">Otimizado para dispositivos móveis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold text-gray-800 mb-2">Universal</h3>
              <p className="text-gray-600">Funciona em qualquer smartphone</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
