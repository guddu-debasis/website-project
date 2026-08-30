import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      {desc && (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  )
}

export default Title