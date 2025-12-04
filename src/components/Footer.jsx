import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

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
          <p className="text-sm text-gray-600">Handcrafted in India. Designed with love and care to become your family heirlooms.</p>
        </div>

        <div>
          <h4 className="font-medium mb-3">Location</h4>
          <p className="text-sm text-gray-600">Up Hill, Malappuram,<br/>Kerala, India</p>

          <div className="mt-4">
            <h4 className="font-medium mb-2">Contact</h4>
            <p className="text-sm text-gray-600">
              <a href="mailto:info@naseema.gold" className="hover:text-naseema">info@naseema.gold</a><br/>
              <a href="tel:+919876543210" className="hover:text-naseema">+91 98765 43210</a>
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
            <button className="px-4 py-2 bg-naseema text-white rounded">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t bg-white">
        <div className="container mx-auto px-6 py-4 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Naseema Jewellery. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Designed with Abhibruz</div>
        </div>
      </div>
    </footer>
  )
}