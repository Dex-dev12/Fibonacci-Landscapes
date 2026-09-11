/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#CC9A3C',
        'primary-dark': '#A87B27',
        'primary-light': '#E2BC70',
        accent: '#3E9C93',
        'accent-dark': '#2C7069',
        background: '#0B1524',
        surface: '#13223B',
        ink: '#F5F1E6',
        muted: '#9FAEC2',
        divider: '#28374F',
        deep: '#060C16',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', '"Bodoni Fallback"', 'serif'],
        serif: ['"Cormorant Garamond"', '"Cormorant Fallback"', 'serif'],
        body: ['"Work Sans"', '"Work Sans Fallback"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"JetBrains Fallback"', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
