module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary accent used for buttons and highlights (warm orange)
        accent: '#FF6B00',
        // deep background/dark token
        dark: '#0F172A',
        // logo/brand neon color switched to orange
        neon: '#FF9A3C'
      }
    },
  },
  plugins: [],
}
