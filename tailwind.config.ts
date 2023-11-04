import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: '#205295',
        page: '#144272',
        card: '#2C74B3',
        'card-hover': '#39A7FF',
        'default-text': '#E0F4FF',
        'blue-accent': '#1450A3',
        'blue-accent-hover': '#337CCF',
      }
    },
  },
  plugins: [],
}
export default config
