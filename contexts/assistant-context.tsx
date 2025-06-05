"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface AssistantStep {
  id: string
  title: string
  description: string
  target?: string
  position?: "top" | "bottom" | "left" | "right"
  action?: () => void
}

interface AssistantContextType {
  isActive: boolean
  currentStep: number
  steps: AssistantStep[]
  startTour: (tourType?: string) => void
  nextStep: () => void
  prevStep: () => void
  skipTour: () => void
  isFirstVisit: boolean
  showWelcome: boolean
  setShowWelcome: (show: boolean) => void
}

const AssistantContext = createContext<AssistantContextType | undefined>(undefined)

export function AssistantProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<AssistantStep[]>([])
  const [isFirstVisit, setIsFirstVisit] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    // Check if this is the user's first visit
    const hasVisited = localStorage.getItem("fetcan-visited")
    if (!hasVisited) {
      setIsFirstVisit(true)
      setShowWelcome(true)
      localStorage.setItem("fetcan-visited", "true")
    }
  }, [])

  const getTours = () => ({
    welcome: [
      {
        id: "welcome-1",
        title: "Bem-vindo à FETCAN!",
        description:
          "Olá! Sou seu assistente virtual. Vou te ajudar a descobrir todas as funcionalidades da nossa feira tecnológica.",
      },
      {
        id: "welcome-2",
        title: "Menu de Navegação",
        description:
          "Use este menu para navegar entre as diferentes seções: projetos, programação, palestrantes e muito mais!",
        target: "nav",
      },
      {
        id: "welcome-3",
        title: "Seletor de Idioma",
        description: "Clique aqui para alterar o idioma. Suportamos Português, Inglês e Espanhol.",
        target: "language-selector",
      },
      {
        id: "welcome-4",
        title: "Projetos Inovadores",
        description:
          "Explore os projetos incríveis desenvolvidos pelos nossos estudantes. Cada projeto mostra tecnologias e inovações únicas.",
      },
      {
        id: "welcome-5",
        title: "App Móvel",
        description:
          "Este site funciona como um app! Você pode instalá-lo na tela inicial do seu celular e usar offline.",
      },
    ],
    features: [
      {
        id: "features-1",
        title: "QR Codes",
        description:
          "Use QR codes para compartilhar facilmente o app com amigos e acessar rapidamente diferentes seções.",
      },
      {
        id: "features-2",
        title: "Funciona Offline",
        description: "O app funciona mesmo sem internet! Você pode navegar e até preencher formulários offline.",
      },
      {
        id: "features-3",
        title: "Compartilhamento",
        description: "Compartilhe páginas específicas usando o botão de compartilhar flutuante em cada página.",
      },
    ],
  })

  const startTour = (tourType = "welcome") => {
    const tours = getTours()
    const tourSteps = tours[tourType as keyof typeof tours] || tours.welcome
    setSteps(tourSteps)
    setCurrentStep(0)
    setIsActive(true)
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsActive(false)
      setCurrentStep(0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const skipTour = () => {
    setIsActive(false)
    setCurrentStep(0)
    setShowWelcome(false)
  }

  return (
    <AssistantContext.Provider
      value={{
        isActive,
        currentStep,
        steps,
        startTour,
        nextStep,
        prevStep,
        skipTour,
        isFirstVisit,
        showWelcome,
        setShowWelcome,
      }}
    >
      {children}
    </AssistantContext.Provider>
  )
}

export function useAssistant() {
  const context = useContext(AssistantContext)
  if (context === undefined) {
    throw new Error("useAssistant must be used within an AssistantProvider")
  }
  return context
}
