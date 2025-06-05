export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-400 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">Sobre a FETCAN</h1>
          <p className="text-xl">Feira Tecnológica do Colégio Estadual Padre José Anchieta</p>
        </header>

        <div className="space-y-8">
          <section className="bg-blue-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A FETCAN nasceu em 2020 com o objetivo de promover a inovação e o desenvolvimento tecnológico entre os
              estudantes do Colégio Estadual Padre José Anchieta. Desde então, tem sido um evento anual que celebra a
              criatividade, o conhecimento científico e o espírito empreendedor de nossos alunos.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ao longo dos anos, a feira cresceu e se tornou uma referência regional, atraindo visitantes de outras
              escolas, universidades e empresas da região, criando uma rede de colaboração e aprendizado mútuo.
            </p>
          </section>

          <section className="bg-blue-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Missão e Objetivos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Nossa Missão</h3>
                <p className="text-gray-700">
                  Promover a educação científica e tecnológica através de projetos inovadores, estimulando o pensamento
                  crítico e a criatividade dos estudantes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Nossos Objetivos</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Incentivar a pesquisa científica</li>
                  <li>• Desenvolver habilidades tecnológicas</li>
                  <li>• Promover o trabalho em equipe</li>
                  <li>• Conectar teoria e prática</li>
                  <li>• Preparar para o futuro profissional</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-blue-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre o Colégio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  45
                </div>
                <h3 className="text-lg font-bold text-gray-800">Anos de História</h3>
                <p className="text-gray-600">Educando gerações desde 1980</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1200
                </div>
                <h3 className="text-lg font-bold text-gray-800">Estudantes</h3>
                <p className="text-gray-600">Do ensino fundamental ao médio</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  80
                </div>
                <h3 className="text-lg font-bold text-gray-800">Professores</h3>
                <p className="text-gray-600">Equipe qualificada e dedicada</p>
              </div>
            </div>
          </section>

          <section className="bg-blue-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Infraestrutura Tecnológica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratórios</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Laboratório de Informática (40 computadores)</li>
                  <li>• Laboratório de Robótica</li>
                  <li>• Laboratório de Ciências</li>
                  <li>• Sala de Projetos Multimídia</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Recursos</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Internet de alta velocidade</li>
                  <li>• Kits de Arduino e Raspberry Pi</li>
                  <li>• Impressora 3D</li>
                  <li>• Equipamentos de eletrônica</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-blue-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Parcerias e Apoio</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A FETCAN conta com o apoio de diversas instituições e empresas que acreditam na importância da educação
              tecnológica:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-800">Universidade Federal</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-800">TechCorp Brasil</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-800">Instituto de IA</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-800">Prefeitura Municipal</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
