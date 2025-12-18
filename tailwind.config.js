/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Yeh line zaroori hai taaki Tailwind src folder ki files check kar sake
  ],
  theme: {
    extend: {
      // Aap yahan custom colors ya fonts add kar sakte hain
      colors: {
        primary: "#2563eb", // Example custom blue
      },
    },
  },
  plugins: [],
}