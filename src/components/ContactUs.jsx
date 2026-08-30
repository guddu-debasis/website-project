import React, { useState } from 'react'
import Title from './Title'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    walletAddress: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Trigger alert message with checkmark tik
    alert(`✔ Thanks for your message! We have received your Web3 inquiry and will get back to you soon.`)

    // Reset form fields
    setFormData({ name: '', email: '', walletAddress: '', message: '' })
  }

  return (
    <section id="contact-us" className="relative py-20 px-6 sm:px-12 transition-colors duration-500 overflow-hidden">
      
      {/* Section Header */}
      <Title 
        title="Get In Touch" 
        desc="Have a Web3 project, dApp proposal, or collaboration in mind? Send us a message below."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 pt-4">
        
        {/* Contact Info Card (2 Cols) */}
        <div className="lg:col-span-2 p-8 rounded-3xl bg-gray-50/90 dark:bg-gray-800/90 border-2 border-gray-200/80 dark:border-gray-700/80 shadow-sm flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Let's Build Together
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              We'd love to hear about your decentralized vision, smart contracts, or web product goals.
            </p>

            <div className="flex flex-col gap-6">
              {/* Email Item */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Email Us</p>
                  <a href="mailto:hello@agency.com" className="text-sm font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    hello@agency.com
                  </a>
                </div>
              </div>

              {/* Web3 Protocol Node */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">ENS Address</p>
                  <p className="text-sm font-mono font-bold text-gray-900 dark:text-white">
                    agency.eth
                  </p>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    San Francisco, CA &amp; Remote
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Web3 Form Container (3 Cols) */}
        <div className="lg:col-span-3 p-8 rounded-3xl bg-gray-50/90 dark:bg-gray-800/90 border-2 border-gray-200/80 dark:border-gray-700/80 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
                />
              </div>
            </div>

            {/* Wallet Address / Web3 Subject Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Wallet Address / ENS Name
              </label>
              <input
                type="text"
                name="walletAddress"
                required
                value={formData.walletAddress}
                onChange={handleChange}
                placeholder="0x... or name.eth"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Message / Project Details
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your Web3 project or dApp scope..."
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
            >
              Send Message &rarr;
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default ContactUs