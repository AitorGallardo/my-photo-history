/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  // corePlugins: {
  //   preflight: false,
  // },
  // prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
    './projects/**/*.{html,ts}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

