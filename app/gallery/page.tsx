"use client"

import { useState } from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Estudantes apresentando projeto de robótica",
      category: "Projetos",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Workshop de programação em andamento",
      category: "Workshops",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Feira tecnológica do ano anterior",
      category: "Eventos Anteriores",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Laboratório de informática da escola",
      category: "Infraestrutura",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Premiação dos melhores projetos",
      category: "Premiação",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Palestra sobre inteligência artificial",
      category: "Palestras",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Projeto de energia solar",
      category: "Projetos",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Demonstração de app mobile",
      category: "Projetos",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Networking entre participantes",
      category: "Networking",
    },
  ]

  const categories = [
    "Todos",
    "Projetos",
    "Workshops",
    "Eventos Anteriores",
    "Infraestrutura",
    "Premiação",
    "Palestras",
    "Networking",
  ]
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredImages =
    selectedCategory === "Todos" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-blue-400 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">Galeria de Fotos</h1>
          <p className="text-xl">Momentos especiais da FETCAN e eventos anteriores</p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                selectedCategory === category ? "bg-cyan-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="text-gray-700 text-sm mb-2">{image.alt}</p>
                <span className="bg-cyan-500 text-white px-2 py-1 rounded text-xs">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Imagem ampliada"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
