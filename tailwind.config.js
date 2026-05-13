/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "vibrant-blue": "#2fc1ff", // Azul vibrante
        "light-blue": "#08acf2", // Azul claro
        "dark-gray": "#101218", // Gris oscuro
        "medium-gray": "#4c5253", // Gris oscuro
        "light-gray": "#f3f6f6", // Gris claro
        "light-white": "#adbcff", // Blanco
        slate: {
          950: "#ffffff", // Blanco
          800: "#3b76a2", // Gris oscuro
        },
      },
      backgroundColor: {
        "light-gray": "#f3f6f6", // Fondo blanco
      },
      textColor: {
        "dark-gray": "#101218", // Texto negro
        "light-blue": "#08acf2", // Texto de botones claro
      },
    },

    fontFamily: {
      lato: ["Lato", "sans-serif"], // Fuente Lato
      roboto: ["Roboto", "sans-serif"], // Fuente Roboto
      abeezee: ["ABeeZee", "sans-serif"], // Fuente ABeeZee
      "roboto-slab": ["Roboto Slab", "serif"], // Fuente Roboto Slab
    },
  },
  plugins: [flowbite.plugin()],
};
