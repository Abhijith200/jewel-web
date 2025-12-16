import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../assets/hero1.jpeg'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-naseema mb-4">AURUM & STONE <span>JEWELS</span> </h1>
          <p className="text-gray-700 max-w-xl mb-6">Hand-crafted heirloom jewelry inspired by tradition and modern aesthetics. Explore curated collections in gold, diamonds and more.</p>
          <Link to="/products" className="inline-block bg-naseema text-[#000] px-6 py-3 rounded shadow hover:opacity-95">Shop Collection</Link>
        </div>
        <div className="flex justify-center">
          <img className="w-full max-w-md rounded shadow" alt="Gold necklace" src={heroimg} />
        </div>
      </div>
    </section>
  )
}