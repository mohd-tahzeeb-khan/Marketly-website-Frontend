/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'webbackground':"#DCD7C9",
        'colorbrown':"#A27B5C",
        'colorgreen':"#3F4E4F",
        'colorblack':"#2C3639",
        'transparent': 'transparent',
      },
    },
  },
  plugins: [],
};
