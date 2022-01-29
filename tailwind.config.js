module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#0F1217',
        white: '#FFFFFF',
        gray: {
          300: '#808994',
          500: '#30363D',
          700: '#1F2024',
          800: '#101217',
          900: '#040404',
        },
      },
      gridTemplateRows: {
        11: 'repeat(11, minmax(0, 1fr))',
      },
      gridRowStart: {
        9: '9',
        10: '10',
      },
      gridRowEnd: {
        9: '9',
        10: '10',
        12: '12',
      },
      gridRow: {
        'span-8': 'span 8 / span 8;',
        'span-9': 'span 9 / span 9;',
      },
    },
    boxShadow: {
      playbtn:
        '-2px -2px 4px rgba(80, 80, 80, 0.25), 2px 2px 4px rgba(9, 8, 8, 0.47), inset 1.5px 1.5px 1px #2F3338',
      operation:
        'inset -4px -4px 14px #333, inset 4px 4px 12px #00000080 !important',
    },
    screens: {
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }
      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      md: { max: '816px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '639px' },
      xs: { max: '375px' },
    },
    minHeight: {
      screen: 'calc(var(--vh, 1vh) * 100)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
