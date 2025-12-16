import React from 'react'
import img1 from '../assets/about-1.jpeg'
import img2 from '../assets/about-2.jpeg'

export default function About() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif text-naseema mb-6 text-center">About AURUM &amp; STONE JEWELS</h1>

      <div className="max-w-3xl mx-auto text-gray-700 space-y-6">
        <p>
          Aurum &amp; Stone Jewels is a trusted jewellery brand built on purity, craftsmanship, and customer-first values. With a strong commitment to quality, we bring you a wide range of gold, diamond, and traditional jewellery designed to suit every occasion. Our pieces blend timeless artistry with modern style, ensuring elegance that lasts for generations.
        </p>

        <p>
          We believe jewellery is more than an ornament — it is a symbol of love, tradition, and celebration. Every design at Aurum &amp; Stone Jewels is crafted with precision, authenticity, and careful attention to detail. Our goal is to provide every customer with a memorable experience marked by transparency, trust, and exceptional service.
        </p>

        {/* <p>
          Led by our esteemed owners — Palembadian Mustafa, Haneefa Olakara, Askar Olakara, Rafeek Karimpan, Abdurahiman, Pazhayathodika Aboobacker, Perinkadakkad Aboo Nasith, Perumkadakkad Aboonavas, Perungadakkad Hamza, Konapilakkal Vadakke Thalakkal Musthafa, and Mohammed Ali Kaithakkal — we continue to grow with a commitment to excellence and innovation in the jewellery industry.
        </p> */}
      </div>

      {/* Image gallery */}
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <figure className="overflow-hidden rounded-lg shadow-lg">
          <img src={img1} alt="Naseema showroom 1" className="w-full h-80 object-cover" />
        </figure>

        <figure className="overflow-hidden rounded-lg shadow-lg">
          <img src={img2} alt="Naseema showroom 2" className="w-full h-80 object-cover" />
        </figure>
      </div>
    </section>
  )
}