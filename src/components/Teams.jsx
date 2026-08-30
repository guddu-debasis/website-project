import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import { teamData } from '../assets/assets'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms delay between each of the 8 member boxes
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  },
}

const TeamCard = ({ team }) => {
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
    <motion.div
      variants={cardVariants}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="group relative rounded-2xl bg-gray-50/90 dark:bg-gray-800/90 border-2 border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 ease-out flex flex-col items-center p-6 text-center overflow-hidden cursor-pointer"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(80, 68, 229, 0.15), transparent 80%)`,
        }}
      />
      <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-indigo-500/50 p-1 group-hover:scale-105 transition-transform duration-300 z-20">
        <img src={team.image} alt={team.name} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="flex flex-col gap-1 relative z-20">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {team.name}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          {team.title}
        </p>
      </div>
    </motion.div>
  )
}

const Teams = () => {
  return (
    <section id="teams" className="relative py-16 px-6 sm:px-12 transition-colors duration-500 overflow-hidden">
      <Title
        title="Meet the Team"
        desc="The passionate thinkers, designers, and developers building exceptional digital experiences for your brand."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2"
      >
        {teamData.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </motion.div>
    </section>
  )
}

export default Teams