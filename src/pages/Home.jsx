import React from 'react'
import Hero from '../components/Hero'
import products from '../data/Product'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium">Featured Collection</h2>
          <Link to="/products" className="text-naseema">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0,4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}