import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-12 overflow-hidden transition-colors duration-500"
    >
      {/* Dynamic Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        
        {/* Social Proof Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-md shadow-sm hover:scale-105 transition-transform duration-300">
          <img 
            src={assets.group_profile} 
            alt="Trusted users" 
            className="h-7 w-auto object-contain"
          />
          <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">
            Trusted By <span className="text-indigo-600 dark:text-indigo-400 font-bold">10k+</span> People
          </p>
        </div>

        {/* Main Hero Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
          Building Digital Products,{' '}
          <span className="bg-linear-to-r from-indigo-600 via-orange-600 to-pink-500 bg-clip-text text-transparent">
            Brands & Experiences
          </span>
        </h1>

        {/* Hero Description */}
        <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
          We help visionary brands and innovative startups design, build, and scale world-class web applications that captivate users and deliver tangible results.
        </p>

        {/* Image Display Wrapper */}
        <div className="relative w-full max-w-3xl mt-4 flex justify-center items-center">
          
          {/* Bottom Background Decorative Graphic (Hidden in Dark Mode) */}
          <img 
            src={assets.bgImage1} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover rounded-3xl dark:hidden opacity-60 -z-10 pointer-events-none"
          />

          {/* Main Hero Showcase Image */}
          <img 
            src={assets.hero_img} 
            alt="Hero Graphic" 
            className="w-full h-auto max-h-112.5 object-contain rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-800/80 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.01]"
          />

        </div>

      </div>
    </section>
  )
}

export default Hero