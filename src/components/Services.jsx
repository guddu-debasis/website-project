import React, { useRef, useState } from 'react'
import assets from '../assets/assets'
import Title from './Title'

// Single Card Component handling mouse tracking animations
const ServiceCard = ({ service }) => {
  const cardRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to the card (for gradient spotlight)
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })

    // Calculate 3D tilt angles based on cursor distance from center
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8 // Tilt range: -8deg to 8deg
    const rotateY = ((x - centerX) / centerX) * 8

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleMouseLeave = () => {
    // Reset card rotation and scale when cursor leaves
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="group relative p-8 rounded-3xl bg-gray-50/90 dark:bg-gray-800/90 border-2 border-gray-200/80 dark:border-gray-700/80 shadow-md hover:shadow-2xl hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-200 ease-out flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Mouse-Tracking Spotlight Glow Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
        }}
      />

      {/* Main Content */}
      <div className="flex flex-col items-start gap-5 relative z-20">
        
        {/* Icon Container */}
        <div className="p-4 rounded-2xl bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
          <img 
            src={service.icon} 
            alt={service.title} 
            className="w-7 h-7 object-contain brightness-0 invert"
          />
        </div>

        {/* Card Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-1">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Read More Link */}
      <div className="pt-6 relative z-20">
        <a 
          href="#contact-us" 
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors"
        >
          Learn More
          <span className="text-base group-hover:translate-x-1.5 transition-transform">&rarr;</span>
        </a>
      </div>
    </div>
  )
}

const Services = () => {
  const servicesData = [
    {
      title: 'Digital Advertising',
      description: 'Targeted ad campaigns engineered to maximize ROI across search, social, and display networks.',
      icon: assets.ads_icon
    },
    {
      title: 'Growth Marketing',
      description: 'Data-driven marketing strategies tailored to acquire, engage, and retain valuable customers.',
      icon: assets.marketing_icon
    },
    {
      title: 'Content Strategy',
      description: 'Compelling brand stories and high-converting content crafted to resonate with your audience.',
      icon: assets.content_icon
    },
    {
      title: 'Social Management',
      description: 'End-to-end social media management to grow your brand presence and build active communities.',
      icon: assets.social_icon
    }
  ]

  return (
    <section id="services" className="relative py-24 px-6 sm:px-12 transition-colors duration-500 overflow-hidden">
      
      {/* Background Graphic */}
      {assets.bgImage2 && (
        <img 
          src={assets.bgImage2} 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-auto object-cover opacity-10 dark:hidden -z-10 pointer-events-none"
        />
      )}

      {/* Section Header */}
      <Title 
        title="How can we help?" 
        desc="We offer specialized solutions designed to accelerate your business growth and build strong brand engagement."
      />

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-4">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services