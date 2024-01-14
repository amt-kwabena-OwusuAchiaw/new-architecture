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
          "background-image":"url('../assets/images/background-image.png')"
      },
      boxShadow:{
        "input-shadow":"2px 4px 3px rgba(0,0,0,0.1)",
        "label-shadow":"0px 0px 10px rgba(0,0,0,0.1)"
      },
      colors:{
        "custom-gray":"#999",
        "thin-gray":"#808080",
        "deep-blue":"#0267FF",
        "account-gray":"#A6A6A6",
        "gaming-color":"#f2d7f3",
        "fashion-color":"#ebffeb",
        "music-color":"#ffe7d6",
        "reading-color":"#d3e3f6",
        "add-gray":"#B3B3B3",
        "light-black":"#1D2939"
      }
    },
  },
  plugins: [],
}
export default config
