"use client"

import React from 'react'
import { motion } from 'framer-motion'

// ==== HEADING COMPONENTS WITH NEW TYPOGRAPHY SYSTEM ====
export const DisplayLarge: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <h1 className={`text-display-lg font-heading leading-tight ${className}`}>
    {children}
  </h1>
)

export const Display: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <h1 className={`text-display font-heading leading-tight ${className}`}>
    {children}
  </h1>
)

export const DisplaySmall: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <h2 className={`text-display-sm font-heading leading-tight ${className}`}>
    {children}
  </h2>
)

export const Heading1: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <h1 className={`text-h1 font-heading leading-tight ${className}`}>
    {children}
  </h1>
)

export const Heading2: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <h2 className={`text-h2 font-heading leading-tight ${className}`}>
    {children}
  </h2>
)

export const Heading3: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <h3 className={`text-h3 font-heading leading-tight ${className}`}>
    {children}
  </h3>
)

// ==== SECTION COMPONENTS WITH VISUAL HIERARCHY ====
export const PrimarySection: React.FC<{
  children: React.ReactNode
  className?: string
  id?: string
}> = ({ children, className = "", id }) => (
  <section id={id} className={`section-primary ${className}`}>
    {children}
  </section>
)

export const SecondarySection: React.FC<{
  children: React.ReactNode
  className?: string
  id?: string
}> = ({ children, className = "", id }) => (
  <section id={id} className={`section-secondary ${className}`}>
    <div className="texture-grid absolute inset-0 z-[-1]"></div>
    {children}
  </section>
)

export const AccentSection: React.FC<{
  children: React.ReactNode
  className?: string
  id?: string
}> = ({ children, className = "", id }) => (
  <section id={id} className={`section-accent ${className}`}>
    <div className="texture-noise absolute inset-0 z-[-1]"></div>
    {children}
  </section>
)

// ==== LOGO-INSPIRED DECORATIVE ELEMENTS ====
export const LogoDecoration: React.FC<{
  className?: string
}> = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute -z-10 w-40 h-40 opacity-10 animate-morph">
      <svg viewBox="0 0 607.16 598.52" className="w-full h-full">
        <path
          className="fill-brand-500 animate-draw"
          d="M734.59,276.41a234,234,0,0,0-166.55-69H432A235.55,235.55,0,0,0,196.42,443V570.4A235.55,235.55,0,0,0,432,805.94H568A235.55,235.55,0,0,0,803.58,570.4V443A234,234,0,0,0,734.59,276.41ZM440.5,686.94H432A116.67,116.67,0,0,1,315.42,570.4V443A116.67,116.67,0,0,1,432,326.42h8.54ZM684.58,570.4A116.67,116.67,0,0,1,568,686.94H559.46V326.42H568A116.67,116.67,0,0,1,684.58,443Z"
          transform="translate(-196.42 -207.42)"
        />
      </svg>
    </div>
  </div>
)

// ==== CARD COMPONENTS WITH STANDARDIZED STYLING ====
export const PrimaryCard: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <motion.div
    className={`card-primary p-6 ${className}`}
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    {children}
  </motion.div>
)

export const SecondaryCard: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <div className={`card-secondary p-4 ${className}`}>
    {children}
  </div>
)

// ==== ICON COMPONENTS WITH COHESIVE STYLING ====
export const PrimaryIconContainer: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <div className={`icon-container-primary ${className}`}>
    {children}
  </div>
)

export const SecondaryIconContainer: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <div className={`icon-container-secondary ${className}`}>
    {children}
  </div>
)

export const TertiaryIconContainer: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <div className={`icon-container-tertiary ${className}`}>
    {children}
  </div>
)

// ==== BUTTON COMPONENTS WITH CONSISTENT STYLING ====
export const PrimaryButton: React.FC<{
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}> = ({ children, className = "", href, onClick }) => {
  const buttonClasses = `inline-flex items-center justify-center px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-all duration-200 ${className}`
  
  return href ? (
    <a href={href} className={buttonClasses}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}

export const SecondaryButton: React.FC<{
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}> = ({ children, className = "", href, onClick }) => {
  const buttonClasses = `inline-flex items-center justify-center px-6 py-3 border-2 border-brand-500 text-brand-600 hover:bg-brand-50 font-medium rounded-lg transition-all duration-200 ${className}`
  
  return href ? (
    <a href={href} className={buttonClasses}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}
