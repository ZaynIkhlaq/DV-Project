/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Observatory Theme
        obsidian: '#0d0c0a',
        charcoal: '#1a1815',
        stone: '#2a2621',
        parchment: '#f5f0e8',
        
        // Accent colors
        amber: {
          light: '#f4d58d',
          DEFAULT: '#d4a373',
          dark: '#b88b5a',
        },
        sage: {
          light: '#c8d5bb',
          DEFAULT: '#a3b18a',
          dark: '#7d8a6a',
        },
        coral: {
          light: '#f2a594',
          DEFAULT: '#e07a5f',
          dark: '#c45d43',
        },
        navy: {
          light: '#4a5568',
          DEFAULT: '#2d3748',
          dark: '#1a202c',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a373' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'dots-pattern': "radial-gradient(circle, rgba(212, 163, 115, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
