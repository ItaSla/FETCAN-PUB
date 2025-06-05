import type React from "react"
import type { Metadata, Viewport } from "next"
import { LanguageProvider } from "../contexts/language-context"
import { AssistantProvider } from "../contexts/assistant-context"
import Navigation from "../components/navigation"
import InstallPrompt from "../components/install-prompt"
import PWAStatus from "../components/pwa-status"
import PageQRShare from "../components/page-qr-share"
import Assistant from "../components/assistant"
import HelpButton from "../components/help-button"
import SmartTips from "../components/smart-tips"
import QuickActions from "../components/quick-actions"
import EasterEgg from "../components/easter-egg"
import "./globals.css"

export const metadata: Metadata = {
  title: "FETCAN - Feira Tecnológica",
  description: "Feira Tecnológica do Colégio Estadual Padre José Anchieta",
  manifest: "/manifest.json",
  keywords: ["feira tecnológica", "tecnologia", "educação", "projetos", "inovação", "escola", "colégio anchieta"],
  authors: [
    {
      name: "Colégio Estadual Padre José Anchieta",
    },
  ],
  creator: "FETCAN",
  publisher: "Colégio Estadual Padre José Anchieta",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FETCAN",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "FETCAN",
    title: "FETCAN - Feira Tecnológica",
    description: "Feira Tecnológica do Colégio Estadual Padre José Anchieta",
  },
  twitter: {
    card: "summary",
    title: "FETCAN - Feira Tecnológica",
    description: "Feira Tecnológica do Colégio Estadual Padre José Anchieta",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5105B4" },
    { media: "(prefers-color-scheme: dark)", color: "#5105B4" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        {/* PWA Meta Tags */}
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FETCAN" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#5105B4" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/EDDS.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/walle-wallpaper.jpg" as="image" />
      </head>
      <body>
        <LanguageProvider>
          <AssistantProvider>
            <PWAStatus />
            <Navigation />
            {children}
            <InstallPrompt />
            <PageQRShare />
            <Assistant />
            <HelpButton />
            <SmartTips />
            <QuickActions />
            <EasterEgg />
          </AssistantProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
