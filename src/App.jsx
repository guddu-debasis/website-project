import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

// Smooth custom cubic-bezier curve for fluid motion
const smoothEase = [0.25, 1, 0.5, 1]

// 1. Above-the-fold staggered entrance on refresh
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Prevents Navbar flash by delaying initial sequence start
      staggerChildren: 0.2, // Smooth spacing between Navbar -> Hero -> TrustedBy
    },
  },
}

const heroChildVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
}

// 2. Below-the-fold scroll reveal animations
const scrollRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
}

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) return savedTheme
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  // Force scroll to top on page refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  // Dark/Light theme class sync
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden">
      
      {/* ABOVE THE FOLD: Cascading Delayed Entrance on Refresh */}
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={heroChildVariants} className="sticky top-0 z-50">
          <Navbar theme={theme} setTheme={setTheme} />
        </motion.div>

        <motion.div variants={heroChildVariants}>
          <Hero />
        </motion.div>

        <motion.div variants={heroChildVariants}>
          <TrustedBy />
        </motion.div>
      </motion.div>

      {/* BELOW THE FOLD: Smooth Motion Reveals on Scroll */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollRevealVariants}
      >
        <Services />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollRevealVariants}
      >
        <OurWork />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollRevealVariants}
      >
        <Teams />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollRevealVariants}
      >
        <ContactUs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollRevealVariants}
      >
        <Footer />
      </motion.div>

    </div>
  )
}

export default App