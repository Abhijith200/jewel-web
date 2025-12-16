import React from 'react'
import Hero from '../components/Hero'
import products from '../data/Product'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Necklace', icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" {...props}>
        <path d="M12 3c2 0 4 1 5 3 1 2 1 3 1 4 0 3-4 6-6 6s-6-3-6-6c0-1 0-2 1-4 1-2 3-3 5-3z" fill="currentColor" />
      </svg>
    )
  },
  { name: 'Earrings', icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" {...props}>
        <path d="M12 2a6 6 0 00-6 6v3a6 6 0 0012 0V8a6 6 0 00-6-6z" fill="currentColor" />
        <path d="M8 18h8v2H8z" fill="currentColor" />
      </svg>
    )
  },
  { name: 'Bangles', icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" {...props}>
        <circle cx="12" cy="12" r="7" stroke="none" fill="currentColor" />
        <circle cx="12" cy="12" r="3" fill="white" />
      </svg>
    )
  },
  { name: 'Rings', icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" {...props}>
        <path d="M12 2l3 5-3 5-3-5 3-5z" fill="currentColor" />
        <circle cx="12" cy="16" r="4" fill="currentColor" />
      </svg>
    )
  },
]

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Categories section */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium">Browse by Category</h2>
          <Link to="/products" className="text-naseema">View All</Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group bg-white border rounded-lg p-6 flex flex-col items-center gap-3 hover:shadow-lg transition"
            >
              <div className="text-naseema group-hover:scale-105 transform">
                {cat.icon({ className: 'text-naseema' })}
              </div>
              <div className="text-sm font-medium">{cat.name}</div>
              <div className="text-xs text-gray-500">
                {products.filter(p => p.category.toLowerCase() === cat.name.toLowerCase()).length} items
              </div>
            </Link>
          ))}
        </div>
      </section>

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