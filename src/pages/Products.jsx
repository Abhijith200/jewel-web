import React from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/Product'

export default function Products() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif text-naseema mb-6">Products</h1>
      <p className="text-gray-600 mb-6">Explore our curated pieces.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}