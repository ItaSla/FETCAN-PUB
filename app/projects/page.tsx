"use client"

import { useLanguage } from "../../contexts/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: "Robô Autônomo de Limpeza",
      category: "Robótica",
      team: "Equipe TechClean",
      description:
        "Um robô capaz de navegar autonomamente e realizar limpeza de ambientes usando sensores ultrassônicos e inteligência artificial.",
      technologies: ["Arduino", "Python", "Sensores Ultrassônicos", "Machine Learning"],
      image: "/placeholder.svg?height=300&width=400",
      icon: "🤖",
    },
    {
      id: 2,
      title: "App de Monitoramento Ambiental",
      category: "Sustentabilidade",
      team: "EcoTech Solutions",
      description: "Aplicativo mobile que monitora qualidade do ar, temperatura e umidade em tempo real usando IoT.",
      technologies: ["React Native", "IoT", "Firebase", "Sensores Ambientais"],
      image: "/placeholder.svg?height=300&width=400",
      icon: "🌱",
    },
    {
      id: 3,
      title: "Sistema de Energia Solar Inteligente",
      category: "Energia Renovável",
      team: "Solar Innovators",
      description: "Sistema automatizado de painéis solares com rastreamento solar e otimização de energia.",
      technologies: ["Microcontroladores", "Sensores LDR", "Motores Servo", "Interface Web"],
      image: "/placeholder.svg?height=300&width=400",
      icon: "☀️",
    },
    {
      id: 4,
      title: "Assistente Virtual para Educação",
      category: "Inteligência Artificial",
      team: "AI Education",
      description: "Chatbot educacional que auxilia estudantes com dúvidas e fornece conteúdo personalizado.",
      technologies: ["Python", "Natural Language Processing", "TensorFlow", "API REST"],
      image: "/placeholder.svg?height=300&width=400",
      icon: "🧠",
    },
    {
      id: 5,
      title: "Game Educativo de Programação",
      category: "Gamificação",
      team: "CodePlay",
      description: "Jogo interativo que ensina conceitos de programação de forma divertida e intuitiva.",
      technologies: ["Unity", "C#", "Game Design", "UI/UX"],
      image: "/placeholder.svg?height=300&width=400",
      icon: "🎮",
    },
    {
      id: 6,
      title: "Prótese Robótica de Baixo Custo",
      category: "Saúde & Tecnologia",
      team: "BioTech Makers",
      description: "Prótese de mão controlada por sinais mioelétricos, impressa em 3D com materiais acessíveis.",
      technologies: ["Impressão 3D", "Sensores EMG", "Arduino", "Biomecânica"],
      image: "/placeholder.svg?height=300&width=400",
      icon: "🦾",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-400 p-6 relative">
      {/* Background tech pattern */}
      <div className="tech-grid-bg absolute inset-0 opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center text-white mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="floating-element">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-500">
                <span className="text-3xl">🔬</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold cyber-text">{t("projects.title")}</h1>
            <div className="floating-element" style={{ animationDelay: "1s" }}>
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-500">
                <span className="text-3xl">🤖</span>
              </div>
            </div>
          </div>
          <p className="text-xl">{t("projects.subtitle")}</p>

          {/* Animated robot eyes */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="robot-eye"></div>
            <div className="robot-eye" style={{ animationDelay: "0.5s" }}></div>
            <div className="robot-eye" style={{ animationDelay: "1s" }}></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="walle-card overflow-hidden group">
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-gray-800">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  {project.title}
                  <div className="robot-eye w-2 h-2"></div>
                </h3>
                <p className="text-gray-600 font-medium mb-3 flex items-center gap-2">
                  <span className="text-lg">👥</span>
                  {project.team}
                </p>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    {t("projects.technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-yellow-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wall-E mascot section */}
        <section className="walle-card text-center p-8 mt-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="floating-element">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Inspirados por Wall-E</h2>
            <div className="floating-element" style={{ animationDelay: "1s" }}>
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="robot-eye w-4 h-4"></div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-lg">
            Assim como Wall-E, nossos projetos buscam soluções tecnológicas para um mundo melhor! Cada inovação
            representa nossa paixão por tecnologia e sustentabilidade.
          </p>
        </section>
      </div>
    </div>
  )
}
