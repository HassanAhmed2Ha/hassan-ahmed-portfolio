/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // Deep Black & Saturated Slate Gray for backgrounds
        primary: '#0F172A', // Very Deep Saturated Slate (almost black, slight blue/gray tint)
        secondary: '#1E293B', // Lighter Saturated Slate (for cards, navbars, hovering)
        
        // Saturated Golden Yellow for accents, highlights, and particles
        accent: '#FBBF24', // Vibrant Saturated Gold (Tailwind amber-400)
        
        // Pure black for extreme depth gradients
        black: '#000000',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { opacity: 0.5, filter: 'drop-shadow(0 0 10px rgba(255, 193, 7, 0.4))' },
          '50%': { opacity: 0.8, filter: 'drop-shadow(0 0 25px rgba(255, 193, 7, 0.9))' },
        },
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        'pulse-gold': 'pulse-gold 6s ease-in-out infinite',
        'pulse-gold-fast': 'pulse-gold 3s ease-in-out infinite',
      },
      fontFamily: {
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
