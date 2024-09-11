const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [    
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        xl: '72px', 
      },
    },
    extend: {
    backgroundImage: {
      hero: 'url(/sembalun-3.jpg)',
      hero2: 'url(/sembalun-1.jpg)'
    },
    colors:{
      'primary': '#37cd52',
      'secondary': '#02985B',
      'broken-white': '#FFF3EB'
    },},
  },
  plugins: [
    require('flowbite/plugin')
  ]
})

