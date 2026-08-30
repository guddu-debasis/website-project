import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    // Detect hover state on interactive elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.cursor-pointer')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Smooth trailing spring animation effect
  useEffect(() => {
    let animationFrameId
    const follow = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }))
      animationFrameId = requestAnimationFrame(follow)
    }
    animationFrameId = requestAnimationFrame(follow)
    return () => cancelAnimationFrame(animationFrameId)
  }, [position])

  return (
    <>
      {/* Small Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-indigo-500 pointer-events-none z-50 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isClicked ? 0.5 : isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Larger Outer Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-indigo-500/60 pointer-events-none z-50 transition-transform duration-100 ease-out ${
          isHovered
            ? 'bg-indigo-500/15 border-indigo-400 scale-150'
            : isClicked
            ? 'scale-75'
            : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${trail.x - 16}px, ${trail.y - 16}px, 0)`,
        }}
      />
    </>
  )
}

export default CustomCursor