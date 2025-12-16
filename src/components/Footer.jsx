import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo3.png'

function SocialIcon({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Link to="/" className="flex items-center gap-2">
                  <span className="font-serif text-xl text-naseema"><img src={logo} alt="" width="200" height="200" viewBox="0 0 24 24" className="text-naseema"/></span>
            </Link>
            {/* <div>
              <div className="font-serif text-2xl text-naseema">Naseema</div>
              <div className="text-sm text-gray-600">Fine Jewellery</div>
            </div> */}
          </div>
          <p className="text-sm text-gray-600">AURUM & STONE JEWELS is a trusted jewellery brand built on purity, craftsmanship, and customer-first values.</p>
        </div>

        <div>
          <h4 className="font-medium mb-3">Location</h4>
          <p className="text-sm text-gray-600">Ernakulam,<br/>Kerala, India</p>

          <div className="mt-4">
            <h4 className="font-medium mb-2">Contact</h4>
            <p className="text-sm text-gray-600">
              <a href="mailto:info@aurum-stone.jewel" className="hover:text-naseema">info@aurum-stone.jewel</a><br/>
              <a href="tel:+911234567890" className="hover:text-naseema">+91 1234567890</a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Quick Links</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><Link to="/" className="hover:text-naseema">Home</Link></li>
            <li><Link to="/products" className="hover:text-naseema">Products</Link></li>
            <li><Link to="/about" className="hover:text-naseema">About</Link></li>
            <li><Link to="/contact" className="hover:text-naseema">Contact</Link></li>
            <li><Link to="/gallery" className="hover:text-naseema">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Follow Us</h4>
          <div className="flex gap-3 mb-4">
            <SocialIcon href="https://instagram.com">IG</SocialIcon>
            <SocialIcon href="https://facebook.com">FB</SocialIcon>
            <SocialIcon href="https://pinterest.com">PT</SocialIcon>
          </div>
          <h4 className="font-medium mb-2">Newsletter</h4>
          <form className="flex gap-2">
            <input className="px-3 py-2 border rounded w-full" placeholder="Your email" />
            <button className="px-4 py-2 bg-naseema border text-black rounded">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t bg-white">
        <div className="container mx-auto px-6 py-4 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} AURUM & STONE JEWELS. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Designed & Developed by Abhibruz</div>
        </div>
      </div>
    </footer>
  )
}