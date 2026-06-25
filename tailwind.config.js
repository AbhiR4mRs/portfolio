/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#030712',      // Deep Obsidian Gray
        surface: '#090e1a',  // Dark Card Surface
        slate: '#0f172a',    // Dark Gray Slate
        mint: '#10b981',     // Vibrant Emerald
        cyan: '#06b6d4',     // Neon Cyan
        indigo: '#6366f1',   // Royal Indigo
        violet: '#8b5cf6',   // Electric Violet
        line: 'rgba(255,255,255,0.05)' // Extra thin subtle border
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        glow: '0 0 50px -12px rgba(99, 102, 241, 0.12)',
        premium: '0 20px 40px -15px rgba(0, 0, 0, 0.5)'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-medium': 'floatMedium 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.05)' }
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.02)' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.35' }
        }
      }
    },
  },
  plugins: [],
}
