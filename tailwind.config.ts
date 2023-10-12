import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.5625rem",
        sm: "0.6875rem",
        md: "1rem",
        xl: "1.1875rem",
        h6: "1.375rem",
        h5: "1.6875rem",
        h4: "2.125rem",
        h3: "2.6875rem",
        h2: "3.3125rem",
        h1: "4.1875rem",
      },
      colors: {
        black: {
          50: "rgba(231, 233, 234, 1)",
          100: "rgba(222, 0, 0, 1)",
          200: "rgba(206, 0, 0, 1)",
          300: "rgba(184, 0, 0, 1)",
          400: "rgba(170, 0, 0, 1)",
          500: "rgba(18, 32, 47, 1)",
          600: "rgba(0, 0, 0, 1)",
          700: "rgba(0, 0, 0, 1)",
          800: "rgba(0, 0, 0, 1)",
          900: "rgba(0, 0, 0, 1)",
        },
        secondary: {
          50: "rgba(231, 233, 234, 1)",
          100: "rgba(222, 0, 0, 1)",
          200: "rgba(206, 0, 0, 1)",
          300: "rgba(184, 0, 0, 1)",
          400: "rgba(170, 0, 0, 1)",
          500: "rgba(35, 105, 242, 1)",
          600: "rgba(0, 0, 0, 1)",
          700: "rgba(0, 0, 0, 1)",
          800: "rgba(0, 0, 0, 1)",
          900: "rgba(0, 0, 0, 1)",
        },
        white: {
          50: "rgba(231, 233, 234, 1)",
          100: "rgba(222, 0, 0, 1)",
          200: "rgba(206, 0, 0, 1)",
          300: "rgba(184, 0, 0, 1)",
          400: "rgba(170, 0, 0, 1)",
          500: "rgba(247, 248, 240, 1)",
          600: "rgba(0, 0, 0, 1)",
          700: "rgba(0, 0, 0, 1)",
          800: "rgba(0, 0, 0, 1)",
          900: "rgba(0, 0, 0, 1)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
// import type { Config } from "tailwindcss";

// // Use alpha in colors
// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           50: "rgba(244, 0, 0, 1)",
//           100: "rgba(222, 0, 0, 1)",
//           200: "rgba(206, 0, 0, 1)",
//           300: "rgba(184, 0, 0, 1)",
//           400: "rgba(170, 0, 0, 1)",
//           500: "rgba(149, 0, 0, 1)",
//           600: "rgba(0, 0, 0, 1)",
//           700: "rgba(0, 0, 0, 1)",
//           800: "rgba(0, 0, 0, 1)",
//           900: "rgba(0, 0, 0, 1)",
//         },
//         secondary: {
//           100: "#D1E5E2",
//           200: "#D1E5E2",
//           300: "#D1E5E2",
//           400: "#D1E5E2",
//           500: "#D1E5E2",
//           600: "#D1E5E2",
//           700: "#D1E5E2",
//           800: "#D1E5E2",
//           900: "#D1E5E2",
//         },
//         accent: {
//           100: "#D1E5E2",
//           200: "#D1E5E2",
//           300: "#D1E5E2",
//           400: "#D1E5E2",
//           500: "#D1E5E2",
//           600: "#D1E5E2",
//           700: "#D1E5E2",
//           800: "#D1E5E2",
//           900: "#D1E5E2",
//         },
//         black: {
//           50: "rgba(231, 233, 234, 1)",
//           100: "rgba(222, 0, 0, 1)",
//           200: "rgba(206, 0, 0, 1)",
//           300: "rgba(184, 0, 0, 1)",
//           400: "rgba(170, 0, 0, 1)",
//           500: "rgba(18, 32, 47, 1)",
//           600: "rgba(0, 0, 0, 1)",
//           700: "rgba(0, 0, 0, 1)",
//           800: "rgba(0, 0, 0, 1)",
//           900: "rgba(0, 0, 0, 1)",
//         },
//         light: {
//           100: "#D1E5E2",
//           200: "#D1E5E2",
//           300: "#D1E5E2",
//           400: "#D1E5E2",
//           500: "#D1E5E2",
//           600: "#D1E5E2",
//           700: "#D1E5E2",
//           800: "#D1E5E2",
//           900: "#D1E5E2",
//         },
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
