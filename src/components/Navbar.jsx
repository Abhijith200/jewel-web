import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/elvinbermin.png'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="font-serif text-xl text-naseema"><img src={logo} alt="" width="200" height="200" viewBox="0 0 24 24" className="text-naseema"/></span>
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? "text-naseema font-medium" : "hover:text-naseema"}>Home</NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? "text-naseema font-medium" : "hover:text-naseema"}>Products</NavLink>
          <NavLink to="/gallery" className={({isActive}) => isActive ? "text-naseema font-medium" : "hover:text-naseema"}>Gallery</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-naseema font-medium" : "hover:text-naseema"}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-naseema font-medium" : "hover:text-naseema"}>Contact</NavLink>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 rounded bg-gray-100">
        <span className="sr-only">Toggle menu</span>
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow rounded w-40">
          <Link onClick={() => setOpen(false)} to="/" className="block px-4 py-2 hover:bg-gray-50">Home</Link>
          <Link onClick={() => setOpen(false)} to="/products" className="block px-4 py-2 hover:bg-gray-50">Products</Link>
          <Link onClick={() => setOpen(false)} to="/gallery" className="block px-4 py-2 hover:bg-gray-50">Gallery</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block px-4 py-2 hover:bg-gray-50">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block px-4 py-2 hover:bg-gray-50">Contact</Link>
        </div>
      )}
    </div>
  )
}