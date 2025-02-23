/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new Tailwind CSS PostCSS plugin
    autoprefixer: {},
  },
};

export default config;