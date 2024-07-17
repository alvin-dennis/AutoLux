/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#000000',
        'background': '#FFFFFF',
        'primary': '#2563eb',
        'secondary': '#22c55e',
        'accent': '#1c1917',
       },
       
    },
  },
  plugins: [],
}
