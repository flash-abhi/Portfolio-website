/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  safelist: [
    // text & gradient colors
    "text-emerald-400",
    "text-cyan-400",
    "text-blue-400",
    "bg-gradient-to-r",
    "from-emerald-500",
    "via-cyan-500",
    "to-blue-500",

    // positioning & animation
    "opacity-0",
    "opacity-100",
    "translate-y-0",
    "-translate-y-20",
    "scale-100",
    "scale-95",
    "sticky",
    "top-0",
  ],

  theme: {
    extend: {},
  },
};
