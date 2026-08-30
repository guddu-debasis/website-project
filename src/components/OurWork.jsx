import React, { useRef, useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'

// Compact Work Card with Micro 3D Tilt Effect
const WorkCard = ({ work }) => {
  const cardRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="group relative rounded-2xl bg-gray-50/90 dark:bg-gray-800/90 border-2 border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 ease-out flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Mouse Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(80, 68, 229, 0.15), transparent 80%)`,
        }}
      />

      {/* Reduced Image Height (h-40 sm:h-44) */}
      <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img 
          src={work.image} 
          alt={work.title} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      </div>

      {/* Compact Padding & Content (p-5) */}
      <div className="p-5 flex flex-col justify-between grow relative z-20 gap-3">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {work.category}
          </span>
          <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {work.title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
            {work.description}
          </p>
        </div>

        {/* View Link */}
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
            View Case Study
            <span className="text-sm group-hover:translate-x-1 transition-transform">&rarr;</span>
          </span>
        </div>
      </div>
    </div>
  )
}

const OurWork = () => {
  const workData = [
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      description: 'Fintech application for money transfers, portfolio tracking, and analytics.',
      image: assets.work_mobile_app
    },
    {
      title: 'Fitness Tracking Platform',
      category: 'UI/UX & Mobile',
      description: 'AI-driven health platform providing personalized workouts and metrics.',
      image: assets.work_fitness_app
    },
    {
      title: 'Analytics Dashboard',
      category: 'Web App',
      description: 'Enterprise dashboard delivering real-time performance metrics and reporting.',
      image: assets.work_dashboard_management
    }
  ]

  return (
    <section id="work" className="relative py-16 px-6 sm:px-12 transition-colors duration-500 overflow-hidden">
      
      {/* Header */}
      <Title 
        title="Our Latest Work" 
        desc="Explore our recent projects built with precision and functional engineering."
      />

      {/* Compact Grid Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
        {workData.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>

    </section>
  )
}

export default OurWork