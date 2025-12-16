import React from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/Product'
import { useSearchParams, Link } from 'react-router-dom'

export default function Products() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || ''

  const filtered = category
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : products

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-serif text-naseema mb-1">{category ? `${category} Collection` : 'Products'}</h1>
          {category && <p className="text-sm text-gray-600">Showing results for <span className="font-medium">{category}</span></p>}
        </div>

        <div className="flex items-center gap-3">
          {category && <Link to="/products" className="px-3 py-1 border rounded text-sm hover:bg-gray-50">Clear filter</Link>}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600">No products found for &quot;{category}&quot;.</p>
          <Link to="/products" className="text-naseema mt-4 inline-block">View all products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </section>
  )
}