"use client"

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-400 flex items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-blue-200 rounded-lg p-8 shadow-lg">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Você está offline</h1>
          <p className="text-gray-700 mb-6">
            Não foi possível conectar à internet. Algumas funcionalidades podem estar limitadas.
          </p>

          <div className="space-y-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800">Você ainda pode:</h2>
            <ul className="text-left text-gray-700 space-y-2">
              <li>• Navegar pelas páginas já visitadas</li>
              <li>• Visualizar a programação do evento</li>
              <li>• Ver informações dos projetos</li>
              <li>• Acessar dados dos palestrantes</li>
            </ul>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="bg-cyan-500 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Tentar novamente
          </button>

          <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Dica:</strong> Esta página funciona offline após a primeira visita graças à tecnologia PWA!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
