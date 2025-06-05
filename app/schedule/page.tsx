export default function SchedulePage() {
  const schedule = [
    {
      time: "08:00 - 09:00",
      title: "Credenciamento",
      description: "Recepção dos participantes e entrega de materiais",
      location: "Hall Principal",
      type: "registration",
    },
    {
      time: "09:00 - 09:30",
      title: "Café de Boas-vindas",
      description: "Networking e confraternização",
      location: "Pátio Central",
      type: "break",
    },
    {
      time: "09:30 - 10:00",
      title: "Abertura Oficial",
      description: "Cerimônia de abertura com autoridades e direção",
      location: "Auditório Principal",
      type: "ceremony",
    },
    {
      time: "10:00 - 12:00",
      title: "Apresentação de Projetos - Turno 1",
      description: "Apresentação dos projetos das turmas do 1º e 2º ano",
      location: "Salas 101-105",
      type: "presentation",
    },
    {
      time: "12:00 - 13:00",
      title: "Almoço",
      description: "Intervalo para refeição",
      location: "Refeitório",
      type: "break",
    },
    {
      time: "13:00 - 14:00",
      title: "Palestra: 'O Futuro da Tecnologia'",
      description: "Com Dr. Carlos Silva - Especialista em IA",
      location: "Auditório Principal",
      type: "lecture",
    },
    {
      time: "14:00 - 15:30",
      title: "Workshop de Inovação",
      description: "Atividades práticas de desenvolvimento tecnológico",
      location: "Laboratório de Informática",
      type: "workshop",
    },
    {
      time: "15:30 - 16:00",
      title: "Coffee Break",
      description: "Pausa para café e networking",
      location: "Pátio Central",
      type: "break",
    },
    {
      time: "16:00 - 17:30",
      title: "Apresentação de Projetos - Turno 2",
      description: "Apresentação dos projetos das turmas do 3º ano",
      location: "Salas 201-205",
      type: "presentation",
    },
    {
      time: "17:30 - 18:00",
      title: "Avaliação dos Projetos",
      description: "Comissão julgadora avalia os projetos",
      location: "Sala dos Professores",
      type: "evaluation",
    },
    {
      time: "18:00 - 18:30",
      title: "Premiação dos Melhores Projetos",
      description: "Cerimônia de premiação e encerramento",
      location: "Auditório Principal",
      type: "ceremony",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "registration":
        return "bg-green-500"
      case "break":
        return "bg-yellow-500"
      case "ceremony":
        return "bg-purple-500"
      case "presentation":
        return "bg-blue-500"
      case "lecture":
        return "bg-red-500"
      case "workshop":
        return "bg-orange-500"
      case "evaluation":
        return "bg-gray-500"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-400 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">Programação Completa</h1>
          <p className="text-xl">Cronograma detalhado da FETCAN 2025</p>
        </header>

        <div className="bg-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Legenda</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm">Credenciamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-sm">Intervalo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="text-sm">Cerimônia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm">Apresentações</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm">Palestra</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-sm">Workshop</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-500 rounded"></div>
              <span className="text-sm">Avaliação</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className={`w-4 h-4 ${getTypeColor(item.type)} rounded-full mt-1`}></div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    <p className="text-sm text-gray-500 mt-2">📍 {item.location}</p>
                  </div>
                  <div className="bg-cyan-500 text-white px-3 py-1 rounded-lg text-sm font-medium">{item.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
