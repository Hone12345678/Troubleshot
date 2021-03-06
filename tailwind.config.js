module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './views/**/*.handlebars',
    './dist/index.html',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      },
      width: {
        '45': '45%',
        '50rem': '50rem',
        '32rem': '32rem',
        '72rem': '72rem',
      },
      spacing: {
        '65rem': '65rem',
      },
      screens: {
        'xs': '325px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      modal: {
        'display': 'none'
      }
    },
  },
  plugins: [],
}
