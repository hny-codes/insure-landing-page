/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      dmSerifDisplay: ['DM Serif Display', 'sans-serif'],
      karla: ['Karla', 'sans-serif'],
    },
  },
  plugins: [],
};
