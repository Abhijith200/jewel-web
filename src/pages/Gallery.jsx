import React from 'react'
import g1 from '../assets/about-1.jpeg'
import g2 from '../assets/about-2.jpeg'
import g3 from '../assets/product-1.jpeg'
import g4 from '../assets/product-2.jpeg'
import g5 from '../assets/gallery1.jpeg'
import g6 from '../assets/gallery2.jpeg'

const images = [
  { id: 1, src: g1, alt: 'Showcase 1' },
  { id: 2, src: g2, alt: 'Showcase 2' },
  { id: 3, src: g3, alt: 'Ring closeup' },
  { id: 4, src: g4, alt: 'Necklace closeup' },
  { id: 5, src: g5, alt: 'Showcase 3' },
  { id: 6, src: g6, alt: 'Showcase 4' },

]

export default function Gallery() {
  const [selected, setSelected] = React.useState(null)

  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif text-naseema mb-8 text-center">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelected(img)}
            className="block overflow-hidden rounded-lg shadow-lg focus:outline-none"
            aria-label={`Open ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover transform hover:scale-105 transition" />
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-3">
              <button
                onClick={() => setSelected(null)}
                className="text-gray-700 hover:text-gray-900 px-3 py-1 rounded"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <img src={selected.src} alt={selected.alt} className="w-full h-[60vh] object-contain" />
              <div className="mt-4 text-sm text-gray-600 text-center">{selected.alt}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}