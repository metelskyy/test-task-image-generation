import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: { md: '769px' },
    extend: {
      colors: {
        'ui-rose': 'var(--color-rose)',
        'ui-dark-rose': 'var(--color-dark-rose)',
        'ui-yellow': 'var(--color-yellow)',
        'ui-dark-yellow': 'var(--color-dark-yellow)',
        'ui-violet': {
          300: 'var(--color-violet-300)',
          800: 'var(--color-violet-800)',
          900: 'var(--color-violet-900)',
        },
        'ui-gray': {
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          850: 'var(--color-gray-850)',
          900: 'var(--color-gray-900)',
        },
        'ui-white-8': 'var(--color-white-8)',
        'ui-white-4': 'var(--color-white-4)',
        'ui-white-12': 'var(--color-white-12)',
        'ui-violet-20': 'var(--color-violet-20)',
      },
      backgroundImage: {
        'gradient-violet-rose':
          'linear-gradient(135deg, #4a34ee 0%, #ee3458 100%)',
        'gradient-yellow': 'linear-gradient(180deg, #edf733 0%, #f7d200 100%)',
        'gradient-rose': 'linear-gradient(180deg, #ee3458 0%, #c31537 100%)',
        'gradient-dark-gray':
          ' linear-gradient(90deg, rgba(19, 19, 19, 0) 0%, #131313 100%)',
        'gradient-light-rose':
          'linear-gradient(180deg, #ff486c 0%, #dd3555 100%)',
        'gradient-yellow-hover':
          'linear-gradient(180deg, #f7ff58 0, #ffe337 100%)',
        'gradient-yellow-active':
          'linear-gradient(180deg, #edf733 0, #edf733 100%)',
      },
      keyframes: {
        swipeDown: {
          '0%, 100%': { transform: 'translateY(100%)' },
        },
        swipeUp: {
          '0%, 100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        swipeDown: 'swipeDown 0.3s ease-in-out',
        swipeUp: 'swipeUp 0.3s ease-in-out',
      },
      willChange: {
        filter: 'filter',
      },
    },
    fontFamily: {
      inter: 'var(--font-inter)',
      sfProDisplay: 'var(--font-sf-pro-display)',
    },
  },
  plugins: [],
} satisfies Config;
