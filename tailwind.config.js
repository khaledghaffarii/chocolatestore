/* eslint-disable quotes */
module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./navigation/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      position: "fixed",
    },
  },
  variants: {},
  plugins: [],
};
