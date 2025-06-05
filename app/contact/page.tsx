export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-400 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">Contato</h1>
          <p className="text-xl">Entre em contato conosco para mais informações sobre a FETCAN</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <section className="bg-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Endereço</h3>
                  <p className="text-gray-700">
                    Rua das Tecnologias, 123
                    <br />
                    Centro - Cidade Exemplo
                    <br />
                    CEP: 12345-678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Telefone</h3>
                  <p className="text-gray-700">
                    (11) 1234-5678
                    <br />
                    (11) 9876-5432 (WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-gray-700">
                    fetcan@colegioanchieta.edu.br
                    <br />
                    contato@colegioanchieta.edu.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  🕒
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Horário de Funcionamento</h3>
                  <p className="text-gray-700">
                    Segunda a Sexta: 7h às 17h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Facebook
                </a>
                <a href="#" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                  Instagram
                </a>
                <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </section>

          {/* Map and Directions */}
          <section className="bg-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Localização</h2>

            {/* Placeholder for map */}
            <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center mb-6">
              <p className="text-gray-600">Mapa do Google Maps</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Como Chegar</h3>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">🚌 Transporte Público</h4>
                <p className="text-gray-700">
                  Linhas de ônibus: 123, 456, 789
                  <br />
                  Ponto de referência: Terminal Central
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">🚗 De Carro</h4>
                <p className="text-gray-700">
                  Estacionamento gratuito disponível
                  <br />
                  Acesso pela Avenida Principal
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">🚇 Metrô</h4>
                <p className="text-gray-700">
                  Estação mais próxima: Centro
                  <br />
                  10 minutos a pé da escola
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Emergency Contact */}
        <section className="bg-red-100 border border-red-300 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold text-red-800 mb-4">Contato de Emergência - Dia do Evento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-red-700">
                <strong>Coordenação Geral:</strong>
                <br />
                Prof. Ana Silva - (11) 99999-1111
              </p>
            </div>
            <div>
              <p className="text-red-700">
                <strong>Suporte Técnico:</strong>
                <br />
                Prof. Carlos Santos - (11) 99999-2222
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
