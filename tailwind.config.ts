import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000218',
      white: '#F7FBFE',
      box: '#E6EAF2',
      violet: {
        100: '#f0eff8',
        200: '#e4e2f2',
        300: '#cdcae8',
        400: '#b3abda',
        500: '#988aca',
        600: '#846eb9',
        700: '#725ba6',
        800: '#604c8b',
        900: '#504072',
        950: '#32294c'
      },
      green: {
        50: '#f4fcf1',
        100: '#e4fade',
        200: '#caf4be',
        300: '#9fea8b',
        400: '#76d95c',
        500: '#48bd2a',
        600: '#379c1d',
        700: '#2e7b1a',
        800: '#28611a',
        900: '#215017',
        950: '#0d2c07'
      },
      yellow: {
        50: '#fbfde9',
        100: '#f7fbc6',
        200: '#f1f791',
        300: '#eef13b',
        400: '#ede822',
        500: '#ddcf15',
        600: '#bfa50f',
        700: '#987810',
        800: '#7e5f15',
        900: '#6c4e17',
        950: '#3f2909'
      },
      red: {
        50: '#fef3f2',
        100: '#fde4e3',
        200: '#fccecc',
        300: '#f9aba8',
        400: '#f37b76',
        500: '#e9514a',
        600: '#d73b34',
        700: '#b32822',
        800: '#95241f',
        900: '#7c2420',
        950: '#430e0c'
      },
      gray: {
        50: '#f6f6f7',
        100: '#eef0f1',
        200: '#e0e2e5',
        300: '#ccd0d5',
        400: '#b6bbc3',
        500: '#a3a6b1',
        600: '#8d909e',
        700: '#81838f',
        800: '#64666f',
        900: '#53545c',
        950: '#313235'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        benzin: ['var(--font-benzin)'],
        ego: ['var(--font-ego)'],
        tahoma: ['var(--font-tahoma)']
      },
      gridTemplateColumns: {
        project: '2fr 1fr'
      },
      screens: {
        xs: '496px'
      },
      dropShadow: {
        heading: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
export default config
