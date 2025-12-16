import React from 'react'
import bgImg from '../assets/about-1.jpeg'

export default function Contact() {
  const [sent, setSent] = React.useState(false)
  const [form, setForm] = React.useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // placeholder behaviour — replace with API call as needed
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-50">
      {/* Centered light panel with gold & white styling */}
      <div className="relative w-full max-w-6xl bg-white text-gray-900 rounded-lg shadow-2xl overflow-hidden">
        {/* Optional subtle decorative background layer (kept very light) */}
        <div
          className="absolute inset-0 opacity-6"
          style={{
            backgroundImage: bgImg,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(80%) brightness(120%)',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          {/* Left: Title + Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              Contact Us<span className="text-naseema">.</span>
            </h2>

            <div className="flex items-start gap-6">
              <div className="w-1 bg-naseema rounded" />
              <div>
                <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Store hours</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ernakulam,<br />
                  Kerala, India<br />
                  Mon - Sat: 10:00 - 18:00
                </p>

                <div className="mt-6">
                  <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Contacts</h3>
                  <p className="text-gray-700">info@aurum-stone.jewel</p>
                  <p className="text-gray-700 mt-1">+91 12345 67890</p>
                </div>

                {/* <div className="mt-8 flex gap-4 text-gray-900">
                  <a className="hover:text-naseema" href="https://www.instagram.com/naseemagold/?hl=en" aria-label="Facebook">FB</a>
                  <a className="hover:text-naseema" href="#" aria-label="Twitter">TW</a>
                  <a className="hover:text-naseema" href="https://www.facebook.com/naseemagoldanddiamonds/" aria-label="Instagram">IG</a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right: Contact form card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm bg-white border border-gray-100 p-6 rounded shadow-sm relative">
              {/* Gold corner accents */}
              <span className="absolute -left-4 -top-4 w-10 h-1 bg-naseema" />
              <span className="absolute -right-4 -bottom-4 w-10 h-1 bg-naseema" />
              <h4 className="text-lg font-medium text-gray-900 mb-4">Contact form</h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 placeholder-gray-400 py-2 px-1 focus:outline-none focus:border-naseema"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 placeholder-gray-400 py-2 px-1 focus:outline-none focus:border-naseema"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border border-gray-100 placeholder-gray-400 py-2 px-3 rounded focus:outline-none focus:border-naseema"
                    placeholder="Message"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
                  >
                    Send Message
                  </button>
                </div>

                {sent && <div className="text-sm text-blue-600 mt-2">Thanks — your message has been sent.</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}