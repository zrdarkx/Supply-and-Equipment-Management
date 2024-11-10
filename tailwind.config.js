/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"], // Fuente Lato
      roboto: ["Roboto", "sans-serif"], // Fuente Roboto
      abeezee: ["ABeeZee", "sans-serif"], // Fuente ABeeZee
      "roboto-slab": ["Roboto Slab", "serif"], // Fuente Roboto Slab
    },
  },
  plugins: [flowbite.plugin()],
};
