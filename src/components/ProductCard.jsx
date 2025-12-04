import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="border rounded overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-naseema font-semibold">₹{product.price}</span>
          <Link to={`/products/${product.id}`} className="text-sm text-white bg-naseema px-3 py-1 rounded">View</Link>
        </div>
      </div>
    </div>
  )
}