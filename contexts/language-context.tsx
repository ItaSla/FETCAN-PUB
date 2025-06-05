"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionaries
const translations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.schedule": "Programação",
    "nav.speakers": "Palestrantes",
    "nav.gallery": "Galeria",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "nav.qr": "QR Codes",
    "nav.evaluation": "Avaliação",

    // Home page
    "home.title": "FETCAN - Feira Tecnológica",
    "home.subtitle": "à Feira Tecnológica do Colégio Estadual Padre José Anchieta!",
    "home.schedule.title": "Programação do Evento",
    "home.schedule.subtitle": "Confira os horários das atividades:",
    "home.schedule.opening": "10h - Abertura Oficial",
    "home.schedule.projects": "11h - Apresentação de Projetos",
    "home.schedule.workshop": "14h - Workshop de Inovação",
    "home.schedule.awards": "16h - Premiação dos Melhores Projetos",
    "home.participate.title": "Participe!",
    "home.participate.subtitle": "Marque presença ou avalie o evento clicando no botão abaixo.",
    "home.participate.button": "Avaliar / Marcar Presença",
    "home.share.title": "Compartilhe a FETCAN",
    "home.share.subtitle": "Use os QR codes para compartilhar facilmente nosso app",
    "home.share.scan": "📱 Escaneie para acessar",
    "home.share.install": "📲 Instale em sua tela inicial",
    "home.share.offline": "🌐 Funciona offline",
    "home.share.button": "Ver Todos os QR Codes",

    // Projects page
    "projects.title": "Projetos da FETCAN 2025",
    "projects.subtitle": "Conheça os projetos inovadores desenvolvidos pelos nossos estudantes",
    "projects.technologies": "Tecnologias:",

    // Schedule page
    "schedule.title": "Programação Completa",
    "schedule.subtitle": "Cronograma detalhado da FETCAN 2025",
    "schedule.legend": "Legenda",
    "schedule.registration": "Credenciamento",
    "schedule.break": "Intervalo",
    "schedule.ceremony": "Cerimônia",
    "schedule.presentations": "Apresentações",
    "schedule.lecture": "Palestra",
    "schedule.workshop": "Workshop",
    "schedule.evaluation": "Avaliação",

    // Speakers page
    "speakers.title": "Palestrantes",
    "speakers.subtitle": "Conheça os especialistas que compartilharão conhecimento na FETCAN 2025",
    "speakers.presentation": "Apresentação:",

    // Gallery page
    "gallery.title": "Galeria de Fotos",
    "gallery.subtitle": "Momentos especiais da FETCAN e eventos anteriores",
    "gallery.all": "Todos",

    // About page
    "about.title": "Sobre a FETCAN",
    "about.subtitle": "Feira Tecnológica do Colégio Estadual Padre José Anchieta",
    "about.history.title": "Nossa História",
    "about.mission.title": "Missão e Objetivos",
    "about.mission.our": "Nossa Missão",
    "about.objectives.our": "Nossos Objetivos",
    "about.school.title": "Sobre o Colégio",
    "about.infrastructure.title": "Infraestrutura Tecnológica",
    "about.partnerships.title": "Parcerias e Apoio",

    // Contact page
    "contact.title": "Contato",
    "contact.subtitle": "Entre em contato conosco para mais informações sobre a FETCAN",
    "contact.info": "Informações de Contato",
    "contact.address": "Endereço",
    "contact.phone": "Telefone",
    "contact.email": "Email",
    "contact.hours": "Horário de Funcionamento",
    "contact.social": "Redes Sociais",
    "contact.location": "Localização",
    "contact.directions": "Como Chegar",
    "contact.emergency": "Contato de Emergência - Dia do Evento",

    // Form page
    "form.title": "Avaliação da FETCAN",
    "form.subtitle": "Nos ajude a melhorar! Preencha o formulário abaixo.",
    "form.name": "Nome:",
    "form.email": "Email:",
    "form.rating": "Como você avalia o evento?",
    "form.rating.excellent": "Excelente",
    "form.rating.good": "Bom",
    "form.rating.regular": "Regular",
    "form.rating.bad": "Ruim",
    "form.comments": "Comentários:",
    "form.submit": "Enviar",
    "form.success": "Formulário enviado com sucesso!",
    "form.back": "Voltar à página inicial",
    "form.offline": "Você está offline. O formulário será salvo e enviado quando a conexão for restabelecida.",

    // QR Codes page
    "qr.title": "QR Codes da FETCAN",
    "qr.subtitle": "Códigos QR para fácil acesso e compartilhamento",
    "qr.main": "App Principal",
    "qr.projects": "Projetos",
    "qr.schedule": "Programação",
    "qr.contact": "Contato",
    "qr.wifi": "WiFi do Evento",
    "qr.poster.title": "Gerador de Pôster com QR Code",
    "qr.share": "📱 Compartilhar",
    "qr.copy": "📋 Copiar Link",
    "qr.download": "💾 Baixar",

    // PWA
    "pwa.install.title": "Instalar FETCAN",
    "pwa.install.description": "Instale o app da FETCAN para acesso rápido e funcionalidade offline!",
    "pwa.install.button": "Instalar",
    "pwa.install.later": "Agora não",
    "pwa.offline": "📡 Você está offline - Algumas funcionalidades podem estar limitadas",
    "pwa.update.title": "Atualização disponível!",
    "pwa.update.description": "Uma nova versão do app está disponível.",
    "pwa.update.button": "Atualizar agora",

    // Offline page
    "offline.title": "Você está offline",
    "offline.description": "Não foi possível conectar à internet. Algumas funcionalidades podem estar limitadas.",
    "offline.available": "Você ainda pode:",
    "offline.retry": "Tentar novamente",

    // Common
    "common.footer": "© 2025 FETCAN - Todos os direitos reservados",
    "common.loading": "Carregando...",
    "common.error": "Erro",
    "common.close": "Fechar",
    "common.back": "Voltar",
    "common.next": "Próximo",
    "common.previous": "Anterior",

    // Assistant
    "assistant.welcome.title": "Bem-vindo à FETCAN!",
    "assistant.welcome.description":
      "Olá! Sou seu assistente virtual. Vou te ajudar a descobrir todas as funcionalidades da nossa feira tecnológica.",
    "assistant.navigation.title": "Menu de Navegação",
    "assistant.navigation.description":
      "Use este menu para navegar entre as diferentes seções: projetos, programação, palestrantes e muito mais!",
    "assistant.language.title": "Seletor de Idioma",
    "assistant.language.description": "Clique aqui para alterar o idioma. Suportamos Português, Inglês e Espanhol.",
    "assistant.projects.title": "Projetos Inovadores",
    "assistant.projects.description":
      "Explore os projetos incríveis desenvolvidos pelos nossos estudantes. Cada projeto mostra tecnologias e inovações únicas.",
    "assistant.pwa.title": "App Móvel",
    "assistant.pwa.description":
      "Este site funciona como um app! Você pode instalá-lo na tela inicial do seu celular e usar offline.",
    "assistant.features.qr.title": "QR Codes",
    "assistant.features.qr.description":
      "Use QR codes para compartilhar facilmente o app com amigos e acessar rapidamente diferentes seções.",
    "assistant.features.offline.title": "Funciona Offline",
    "assistant.features.offline.description":
      "O app funciona mesmo sem internet! Você pode navegar e até preencher formulários offline.",
    "assistant.features.share.title": "Compartilhamento",
    "assistant.features.share.description":
      "Compartilhe páginas específicas usando o botão de compartilhar flutuante em cada página.",
    "assistant.help.title": "Precisa de Ajuda?",
    "assistant.help.description":
      "Clique no ícone de ajuda a qualquer momento para obter dicas ou iniciar um tour guiado.",
    "assistant.next": "Próximo",
    "assistant.previous": "Anterior",
    "assistant.skip": "Pular",
    "assistant.finish": "Finalizar",
    "assistant.got_it": "Entendi!",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.schedule": "Schedule",
    "nav.speakers": "Speakers",
    "nav.gallery": "Gallery",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.qr": "QR Codes",
    "nav.evaluation": "Evaluation",

    // Home page
    "home.title": "FETCAN - Technology Fair",
    "home.subtitle": "Technology Fair of Padre José Anchieta State School!",
    "home.schedule.title": "Event Schedule",
    "home.schedule.subtitle": "Check the activity schedule:",
    "home.schedule.opening": "10am - Official Opening",
    "home.schedule.projects": "11am - Project Presentations",
    "home.schedule.workshop": "2pm - Innovation Workshop",
    "home.schedule.awards": "4pm - Best Projects Awards",
    "home.participate.title": "Participate!",
    "home.participate.subtitle": "Mark your presence or evaluate the event by clicking the button below.",
    "home.participate.button": "Evaluate / Mark Presence",
    "home.share.title": "Share FETCAN",
    "home.share.subtitle": "Use QR codes to easily share our app",
    "home.share.scan": "📱 Scan to access",
    "home.share.install": "📲 Install on your home screen",
    "home.share.offline": "🌐 Works offline",
    "home.share.button": "View All QR Codes",

    // Projects page
    "projects.title": "FETCAN 2025 Projects",
    "projects.subtitle": "Discover the innovative projects developed by our students",
    "projects.technologies": "Technologies:",

    // Schedule page
    "schedule.title": "Complete Schedule",
    "schedule.subtitle": "Detailed schedule of FETCAN 2025",
    "schedule.legend": "Legend",
    "schedule.registration": "Registration",
    "schedule.break": "Break",
    "schedule.ceremony": "Ceremony",
    "schedule.presentations": "Presentations",
    "schedule.lecture": "Lecture",
    "schedule.workshop": "Workshop",
    "schedule.evaluation": "Evaluation",

    // Speakers page
    "speakers.title": "Speakers",
    "speakers.subtitle": "Meet the experts who will share knowledge at FETCAN 2025",
    "speakers.presentation": "Presentation:",

    // Gallery page
    "gallery.title": "Photo Gallery",
    "gallery.subtitle": "Special moments from FETCAN and previous events",
    "gallery.all": "All",

    // About page
    "about.title": "About FETCAN",
    "about.subtitle": "Technology Fair of Padre José Anchieta State School",
    "about.history.title": "Our History",
    "about.mission.title": "Mission and Objectives",
    "about.mission.our": "Our Mission",
    "about.objectives.our": "Our Objectives",
    "about.school.title": "About the School",
    "about.infrastructure.title": "Technology Infrastructure",
    "about.partnerships.title": "Partnerships and Support",

    // Contact page
    "contact.title": "Contact",
    "contact.subtitle": "Contact us for more information about FETCAN",
    "contact.info": "Contact Information",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Business Hours",
    "contact.social": "Social Media",
    "contact.location": "Location",
    "contact.directions": "How to Get There",
    "contact.emergency": "Emergency Contact - Event Day",

    // Form page
    "form.title": "FETCAN Evaluation",
    "form.subtitle": "Help us improve! Fill out the form below.",
    "form.name": "Name:",
    "form.email": "Email:",
    "form.rating": "How do you rate the event?",
    "form.rating.excellent": "Excellent",
    "form.rating.good": "Good",
    "form.rating.regular": "Regular",
    "form.rating.bad": "Bad",
    "form.comments": "Comments:",
    "form.submit": "Submit",
    "form.success": "Form submitted successfully!",
    "form.back": "Back to home page",
    "form.offline": "You are offline. The form will be saved and sent when connection is restored.",

    // QR Codes page
    "qr.title": "FETCAN QR Codes",
    "qr.subtitle": "QR codes for easy access and sharing",
    "qr.main": "Main App",
    "qr.projects": "Projects",
    "qr.schedule": "Schedule",
    "qr.contact": "Contact",
    "qr.wifi": "Event WiFi",
    "qr.poster.title": "QR Code Poster Generator",
    "qr.share": "📱 Share",
    "qr.copy": "📋 Copy Link",
    "qr.download": "💾 Download",

    // PWA
    "pwa.install.title": "Install FETCAN",
    "pwa.install.description": "Install the FETCAN app for quick access and offline functionality!",
    "pwa.install.button": "Install",
    "pwa.install.later": "Not now",
    "pwa.offline": "📡 You are offline - Some features may be limited",
    "pwa.update.title": "Update available!",
    "pwa.update.description": "A new version of the app is available.",
    "pwa.update.button": "Update now",

    // Offline page
    "offline.title": "You are offline",
    "offline.description": "Could not connect to the internet. Some features may be limited.",
    "offline.available": "You can still:",
    "offline.retry": "Try again",

    // Common
    "common.footer": "© 2025 FETCAN - All rights reserved",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.close": "Close",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",

    // Assistant
    "assistant.welcome.title": "Welcome to FETCAN!",
    "assistant.welcome.description":
      "Hello! I'm your virtual assistant. I'll help you discover all the features of our technology fair.",
    "assistant.navigation.title": "Navigation Menu",
    "assistant.navigation.description":
      "Use this menu to navigate between different sections: projects, schedule, speakers and much more!",
    "assistant.language.title": "Language Selector",
    "assistant.language.description": "Click here to change the language. We support Portuguese, English and Spanish.",
    "assistant.projects.title": "Innovative Projects",
    "assistant.projects.description":
      "Explore the amazing projects developed by our students. Each project showcases unique technologies and innovations.",
    "assistant.pwa.title": "Mobile App",
    "assistant.pwa.description":
      "This website works like an app! You can install it on your phone's home screen and use it offline.",
    "assistant.features.qr.title": "QR Codes",
    "assistant.features.qr.description":
      "Use QR codes to easily share the app with friends and quickly access different sections.",
    "assistant.features.offline.title": "Works Offline",
    "assistant.features.offline.description":
      "The app works even without internet! You can browse and even fill forms offline.",
    "assistant.features.share.title": "Sharing",
    "assistant.features.share.description": "Share specific pages using the floating share button on each page.",
    "assistant.help.title": "Need Help?",
    "assistant.help.description": "Click the help icon anytime to get tips or start a guided tour.",
    "assistant.next": "Next",
    "assistant.previous": "Previous",
    "assistant.skip": "Skip",
    "assistant.finish": "Finish",
    "assistant.got_it": "Got it!",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.schedule": "Programación",
    "nav.speakers": "Ponentes",
    "nav.gallery": "Galería",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    "nav.qr": "Códigos QR",
    "nav.evaluation": "Evaluación",

    // Home page
    "home.title": "FETCAN - Feria Tecnológica",
    "home.subtitle": "¡Feria Tecnológica del Colegio Estatal Padre José Anchieta!",
    "home.schedule.title": "Programación del Evento",
    "home.schedule.subtitle": "Consulta los horarios de las actividades:",
    "home.schedule.opening": "10h - Apertura Oficial",
    "home.schedule.projects": "11h - Presentación de Proyectos",
    "home.schedule.workshop": "14h - Taller de Innovación",
    "home.schedule.awards": "16h - Premiación de los Mejores Proyectos",
    "home.participate.title": "¡Participa!",
    "home.participate.subtitle": "Marca tu presencia o evalúa el evento haciendo clic en el botón de abajo.",
    "home.participate.button": "Evaluar / Marcar Presencia",
    "home.share.title": "Comparte FETCAN",
    "home.share.subtitle": "Usa códigos QR para compartir fácilmente nuestra app",
    "home.share.scan": "📱 Escanea para acceder",
    "home.share.install": "📲 Instala en tu pantalla de inicio",
    "home.share.offline": "🌐 Funciona sin conexión",
    "home.share.button": "Ver Todos los Códigos QR",

    // Projects page
    "projects.title": "Proyectos FETCAN 2025",
    "projects.subtitle": "Conoce los proyectos innovadores desarrollados por nuestros estudiantes",
    "projects.technologies": "Tecnologías:",

    // Schedule page
    "schedule.title": "Programación Completa",
    "schedule.subtitle": "Cronograma detallado de FETCAN 2025",
    "schedule.legend": "Leyenda",
    "schedule.registration": "Registro",
    "schedule.break": "Descanso",
    "schedule.ceremony": "Ceremonia",
    "schedule.presentations": "Presentaciones",
    "schedule.lecture": "Conferencia",
    "schedule.workshop": "Taller",
    "schedule.evaluation": "Evaluación",

    // Speakers page
    "speakers.title": "Ponentes",
    "speakers.subtitle": "Conoce a los expertos que compartirán conocimiento en FETCAN 2025",
    "speakers.presentation": "Presentación:",

    // Gallery page
    "gallery.title": "Galería de Fotos",
    "gallery.subtitle": "Momentos especiales de FETCAN y eventos anteriores",
    "gallery.all": "Todos",

    // About page
    "about.title": "Acerca de FETCAN",
    "about.subtitle": "Feria Tecnológica del Colegio Estatal Padre José Anchieta",
    "about.history.title": "Nuestra Historia",
    "about.mission.title": "Misión y Objetivos",
    "about.mission.our": "Nuestra Misión",
    "about.objectives.our": "Nuestros Objetivos",
    "about.school.title": "Acerca del Colegio",
    "about.infrastructure.title": "Infraestructura Tecnológica",
    "about.partnerships.title": "Alianzas y Apoyo",

    // Contact page
    "contact.title": "Contacto",
    "contact.subtitle": "Contáctanos para más información sobre FETCAN",
    "contact.info": "Información de Contacto",
    "contact.address": "Dirección",
    "contact.phone": "Teléfono",
    "contact.email": "Email",
    "contact.hours": "Horario de Atención",
    "contact.social": "Redes Sociales",
    "contact.location": "Ubicación",
    "contact.directions": "Cómo Llegar",
    "contact.emergency": "Contacto de Emergencia - Día del Evento",

    // Form page
    "form.title": "Evaluación de FETCAN",
    "form.subtitle": "¡Ayúdanos a mejorar! Completa el formulario a continuación.",
    "form.name": "Nombre:",
    "form.email": "Email:",
    "form.rating": "¿Cómo evalúas el evento?",
    "form.rating.excellent": "Excelente",
    "form.rating.good": "Bueno",
    "form.rating.regular": "Regular",
    "form.rating.bad": "Malo",
    "form.comments": "Comentarios:",
    "form.submit": "Enviar",
    "form.success": "¡Formulario enviado con éxito!",
    "form.back": "Volver a la página principal",
    "form.offline": "Estás sin conexión. El formulario se guardará y enviará cuando se restablezca la conexión.",

    // QR Codes page
    "qr.title": "Códigos QR de FETCAN",
    "qr.subtitle": "Códigos QR para fácil acceso y compartir",
    "qr.main": "App Principal",
    "qr.projects": "Proyectos",
    "qr.schedule": "Programación",
    "qr.contact": "Contacto",
    "qr.wifi": "WiFi del Evento",
    "qr.poster.title": "Generador de Póster con Código QR",
    "qr.share": "📱 Compartir",
    "qr.copy": "📋 Copiar Enlace",
    "qr.download": "💾 Descargar",

    // PWA
    "pwa.install.title": "Instalar FETCAN",
    "pwa.install.description": "¡Instala la app de FETCAN para acceso rápido y funcionalidad sin conexión!",
    "pwa.install.button": "Instalar",
    "pwa.install.later": "Ahora no",
    "pwa.offline": "📡 Estás sin conexión - Algunas funciones pueden estar limitadas",
    "pwa.update.title": "¡Actualización disponible!",
    "pwa.update.description": "Una nueva versión de la app está disponible.",
    "pwa.update.button": "Actualizar ahora",

    // Offline page
    "offline.title": "Estás sin conexión",
    "offline.description": "No se pudo conectar a internet. Algunas funciones pueden estar limitadas.",
    "offline.available": "Aún puedes:",
    "offline.retry": "Intentar de nuevo",

    // Common
    "common.footer": "© 2025 FETCAN - Todos los derechos reservados",
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.close": "Cerrar",
    "common.back": "Atrás",
    "common.next": "Siguiente",
    "common.previous": "Anterior",

    // Assistant
    "assistant.welcome.title": "¡Bienvenido a FETCAN!",
    "assistant.welcome.description":
      "¡Hola! Soy tu asistente virtual. Te ayudaré a descubrir todas las funciones de nuestra feria tecnológica.",
    "assistant.navigation.title": "Menú de Navegación",
    "assistant.navigation.description":
      "Usa este menú para navegar entre las diferentes secciones: proyectos, programación, ponentes ¡y mucho más!",
    "assistant.language.title": "Selector de Idioma",
    "assistant.language.description": "Haz clic aquí para cambiar el idioma. Soportamos Portugués, Inglés y Español.",
    "assistant.projects.title": "Proyectos Innovadores",
    "assistant.projects.description":
      "Explora los increíbles proyectos desarrollados por nuestros estudiantes. Cada proyecto muestra tecnologías e innovaciones únicas.",
    "assistant.pwa.title": "App Móvil",
    "assistant.pwa.description":
      "¡Este sitio web funciona como una app! Puedes instalarlo en la pantalla de inicio de tu teléfono y usarlo sin conexión.",
    "assistant.features.qr.title": "Códigos QR",
    "assistant.features.qr.description":
      "Usa códigos QR para compartir fácilmente la app con amigos y acceder rápidamente a diferentes secciones.",
    "assistant.features.offline.title": "Funciona Sin Conexión",
    "assistant.features.offline.description":
      "¡La app funciona incluso sin internet! Puedes navegar e incluso llenar formularios sin conexión.",
    "assistant.features.share.title": "Compartir",
    "assistant.features.share.description":
      "Comparte páginas específicas usando el botón flotante de compartir en cada página.",
    "assistant.help.title": "¿Necesitas Ayuda?",
    "assistant.help.description":
      "Haz clic en el ícono de ayuda en cualquier momento para obtener consejos o iniciar un tour guiado.",
    "assistant.next": "Siguiente",
    "assistant.previous": "Anterior",
    "assistant.skip": "Saltar",
    "assistant.finish": "Finalizar",
    "assistant.got_it": "¡Entendido!",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("fetcan-language") as Language
    if (savedLanguage && ["pt", "en", "es"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split("-")[0] as Language
      if (["pt", "en", "es"].includes(browserLang)) {
        setLanguage(browserLang)
      }
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("fetcan-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
