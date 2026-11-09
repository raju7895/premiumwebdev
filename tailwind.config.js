/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './designs/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-hanken)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-prata)', 'Georgia', 'serif'],
        display: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#ffffff',
        cyan: '#79dce8',
        'cyan-logo': '#5fd0e1',
        'button-ink': '#071227',
        base: '#04101f',
        hairline: 'rgba(255, 255, 255, 0.23)',
        surface: '#09152a',
        muted: '#94a3b8',
        line: 'rgba(255, 255, 255, 0.12)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      spacing: {
        0.5: '2px',
        1.5: '6px',
        3.5: '14px',
        18: '72px',
        22: '88px',
        26: '104px',
        30: '120px',
        34: '136px',
        38: '152px',
        42: '168px',
        46: '184px',
        50: '200px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink'),
            maxWidth: 'none',
            fontSize: theme('fontSize.md'),
            lineHeight: theme('lineHeight.relaxed'),
            h1: { fontSize: theme('fontSize.7xl'), letterSpacing: '-0.02em' },
            h2: { fontSize: theme('fontSize.5xl'), letterSpacing: '-0.02em' },
            a: { color: theme('colors.cyan'), textDecoration: 'none' },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
