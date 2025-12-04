import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import products from '../data/Product'

export default function ProductView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => String(p.id) === String(id))

  if (!product) {
    return (
      <section className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-naseema mb-4">Product not found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the product you were looking for.</p>
          <div className="flex justify-center gap-3">
            <Link to="/products" className="px-4 py-2 border rounded hover:bg-gray-50">Back to products</Link>
            <button onClick={() => navigate(-1)} className="px-4 py-2 bg-naseema text-white rounded">Go back</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full max-w-lg object-cover rounded shadow" />
        </div>

        <div>
          <h1 className="text-3xl font-serif text-naseema mb-2">{product.name}</h1>
          <p className="text-sm text-gray-600 mb-4">{product.category}</p>

          <div className="text-2xl font-semibold text-naseema mb-6">₹{product.price}</div>

          <h3 className="font-medium mb-2">Details</h3>
          <p className="text-gray-700 mb-6">
            {product.description
              ? product.description
              : 'A beautifully crafted piece from Naseema. Each item is handcrafted using traditional techniques by skilled artisans. For more details or customisations, get in touch via the contact page.'}
          </p>

          <div className="flex gap-3">
            <button className="px-6 py-3 bg-naseema text-white rounded shadow hover:opacity-95">Enquire</button>
            <Link to="/products" className="px-6 py-3 border rounded hover:bg-gray-50">Back to products</Link>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <div>SKU: {product.sku ?? `NASEEMA-${product.id}`}</div>
            <div className="mt-2">Material: {product.material ?? 'Gold / Diamonds (varies)'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}