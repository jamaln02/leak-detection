/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'vector-bg': "url('/Vector 196.svg')",
        'rectangle-bg': "url('/Rectangle 4458.png')"
      },
      colors: {
       main:"#003773",
       second:"#3162DA"
      },
    },
  },
  plugins: [],
};
