import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className="w-full py-8 px-6 text-center transition-colors duration-500">
      <p className="text-xs sm:text-sm font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-6">
        Trusted by Leading Companies
      </p>

      {/* Single Line Scrollable Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-8 sm:gap-12 md:gap-16 overflow-x-auto no-scrollbar py-2">
        {company_logos.map((logo, index) => (
          <img 
            key={index} 
            src={logo} 
            alt={`Company logo ${index + 1}`} 
            className="h-6 sm:h-8 w-auto min-w-20 object-contain opacity-70 hover:opacity-100 dark:opacity-80 dark:hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </div>
  )
}

export default TrustedBy