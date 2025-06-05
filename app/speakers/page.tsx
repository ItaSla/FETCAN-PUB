export default function SpeakersPage() {
  const speakers = [
    {
      name: "Dr. Carlos Silva",
      title: "Especialista em Inteligência Artificial",
      company: "Instituto de Tecnologia Avançada",
      bio: "Doutor em Ciência da Computação com mais de 15 anos de experiência em IA e Machine Learning. Autor de diversos artigos científicos e consultor em grandes empresas de tecnologia.",
      talk: "O Futuro da Tecnologia: IA e suas Aplicações",
      time: "13:00 - 14:00",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "https://linkedin.com/in/carlossilva",
        twitter: "https://twitter.com/carlossilva",
      },
    },
    {
      name: "Eng. Maria Santos",
      title: "Desenvolvedora Senior Full-Stack",
      company: "TechCorp Brasil",
      bio: "Engenheira de Software com especialização em desenvolvimento web e mobile. Mentora de jovens programadores e defensora da inclusão feminina na tecnologia.",
      talk: "Workshop: Desenvolvimento de Apps Modernos",
      time: "14:00 - 15:30",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "https://linkedin.com/in/mariasantos",
        github: "https://github.com/mariasantos",
      },
    },
    {
      name: "Prof. João Oliveira",
      title: "Coordenador de Robótica",
      company: "Universidade Federal do Paraná",
      bio: "Professor universitário e pesquisador em robótica educacional. Coordena projetos de extensão que levam tecnologia para escolas públicas.",
      talk: "Robótica na Educação: Transformando o Aprendizado",
      time: "15:45 - 16:30",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "https://linkedin.com/in/joaooliveira",
        email: "joao.oliveira@ufpr.br",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-400 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">Palestrantes</h1>
          <p className="text-xl">Conheça os especialistas que compartilharão conhecimento na FETCAN 2025</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-blue-200 rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{speaker.name}</h3>
                  <p className="text-lg text-cyan-600 font-semibold mb-1">{speaker.title}</p>
                  <p className="text-gray-600 mb-4">{speaker.company}</p>
                  <p className="text-gray-700 mb-4">{speaker.bio}</p>

                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Apresentação:</h4>
                    <p className="text-gray-700 mb-2">{speaker.talk}</p>
                    <p className="text-sm text-cyan-600 font-semibold">🕒 {speaker.time}</p>
                  </div>

                  <div className="flex justify-center md:justify-start gap-4">
                    {speaker.social.linkedin && (
                      <a
                        href={speaker.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                    {speaker.social.twitter && (
                      <a
                        href={speaker.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-sky-600 transition-colors"
                      >
                        Twitter
                      </a>
                    )}
                    {speaker.social.github && (
                      <a
                        href={speaker.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-900 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {speaker.social.email && (
                      <a
                        href={`mailto:${speaker.social.email}`}
                        className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                      >
                        Email
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
