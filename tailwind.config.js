const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    // Standardized spacing system based on 8px increments
    spacing: {
      '0': '0px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '11': '44px',
      '12': '48px',
      '14': '56px',
      '16': '64px',
      '20': '80px',
      '24': '96px',
      '28': '112px',
      '32': '128px',
      '36': '144px',
      '40': '160px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        heading: ['var(--font-space)', ...fontFamily.sans],
        display: ['var(--font-quicksand)', ...fontFamily.sans],
      },
      fontSize: {
        // Improved type hierarchy with more distinct sizes
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '600' }],
        'h5': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '600' }],
        'h6': ['1rem', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '600' }],
      },
      colors: {
        // 60-30-10 color ratio implementation with a cohesive color system
        // Primary color - 60% (main blue)
        brand: {
          50: '#eef5ff',
          100: '#e0edff', 
          200: '#c7daff',
          300: '#a6c1ff',
          400: '#819dff',
          500: '#3b82f6', // Primary color
          600: '#2563eb', // Primary hover
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Secondary color - 30% (purple)
        accent: {
          50: '#f4f4ff',
          100: '#e9e9ff',
          200: '#d5d5ff',
          300: '#b3b3ff',
          400: '#8a8aff',
          500: '#4f46e5', // Secondary color
          600: '#4338ca',
          700: '#3730a3',
          800: '#312e81',
          900: '#2c2879',
          950: '#1a1854',
        },
        // Accent color - 10% (for highlights and calls to action)
        highlight: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Neutral colors for text and backgrounds
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 8s ease-in-out infinite',
        'float-delay': 'float-delay 8s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'float-very-slow': 'float-slow 14s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'meteor': 'meteor 5s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'wave': 'wave 10s ease-in-out infinite',
        'ripple': 'ripple 3s linear infinite',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'float-delay': {
          '0%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-5px) scale(1.03)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'meteor': {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
        'wave': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animated')
  ],
}
