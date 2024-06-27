module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        'plotly-container': '100%',
        'plotly-height': '600px',
      },
      colors: {
        'plotly-bg': '#f0f0f0',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
