import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513',
          50: '#FFF8F0',
          100: '#F5E6D3',
          200: '#E6D4B8',
          300: '#D4B896',
          400: '#C19A6B',
          500: '#8B4513',
          600: '#703810',
          700: '#5A2F0D',
          800: '#4A2509',
          900: '#3A1F07',
        },
        secondary: {
          DEFAULT: '#D2691E',
          50: '#FEF7F0',
          100: '#FDEDD8',
          200: '#F8D8B0',
          300: '#F2BE87',
          400: '#ECA460',
          500: '#D2691E',
          600: '#B8571A',
          700: '#9C4515',
          800: '#803711',
          900: '#64290D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
