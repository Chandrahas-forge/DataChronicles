module.exports = {
  mode: "jit", // Just-In-Time mode
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.md',
  ],
  safelist: [
    'plotly-container',  // Add any classes you want to explicitly safelist
    'responsive-video-container',
    'responsive-iframe',
    'plotly-iframe'
  ],
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
