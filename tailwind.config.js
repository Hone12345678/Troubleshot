module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './dist/index.html',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
