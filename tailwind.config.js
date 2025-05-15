// eslint-disable-next-line

/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",

      // lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1440px",

      "2xl": "1536px",

      mobile: "320px",
      tablet: "768px",
      laptop: "1024px",

      // => @media (min-width: 1536px) { ... }
    },

    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      herotitle: "3.375rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },

    fontFamily: {
      // quicksand: ['Quicksand', 'sans-serif'],
      // outfit: ['Outfit', 'sans-serif'],
      // poppin: ['Poppins'],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    colors: {
      ...colors,

      primary: {
        DEFAULT: '#00838f',
        light: '#4fb3bf',
        dark: '#005662',
      },
      gray: {
        100: '#f5f7fa',
        200: '#e4e7eb',
        300: '#cbd2d9',
        400: '#9aa5b1',
        500: '#7b8794',
        600: '#616e7c',
        700: '#4a5568',
        800: '#323f4b',
        900: '#1f2933',
      },
    },
    borderRadius: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      full: '9999px',
    },
    spacing: {
      none: 0,
      xxs: "4px",
      xs: "8px",
      msm: "12px",
      inputgap: "10px",
      sm: "16px",
      normal: "20px",
      md: "24px",
      lg: "32px",
      lgx: "40px",
      xl: "48px",
      "2xl": "64px",
      "3xl": "72px",
      "4xl": "84px",
      "5xl": "96px",
      "6xl": "108px",
      "7xl": "124px",
      med: "3.75rem",
    },
  },
  variants: {
    extend: {
      textOpacity: ["dark"],
      height: ["responsive"],
    },
  },
  plugins: [],
};