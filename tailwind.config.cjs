module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: '#0b0f12',
        'hacker-green': '#00ff6a',
        'neon-red': '#ff385c',
        glass: 'rgba(255,255,255,0.04)'
      },
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 6px 30px rgba(0,255,106,0.08), inset 0 1px 0 rgba(255,255,255,0.02)'
      }
    }
  },
  plugins: []
};
