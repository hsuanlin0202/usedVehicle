module.exports = {
  theme: {
    extend: {
      borderRadius: {
        md: "0.375rem",
      },
      maxWidth: {
        150: "150px",
      },
    },
    container: {
      padding: "0",
    },
  },
  variants: {},
  plugins: [],

  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {},
  },
};
