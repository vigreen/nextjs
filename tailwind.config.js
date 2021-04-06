const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '8': '8px',
        'box-tab': '702px',
        'box': '1170px',
        'nav-add': '263.16px',
        'nav-adds': '190px',
        '20': '20px',
        '24': '24px',
        '31': '31px',
        '47': '47px',
        '80': '80px',
        '97': '97px',
        '324': '324px',
        '325': '325px',
        '330': '330px',
        '400': '400px',
        '440': '440px',
        '470': '470px',
        '475': '475px',
        '600': '600px',
        'nav-max': '489px',
        '621': '621px',
        'logo-mob': '113px',
        '900': '900px',
        '83': '83px',
        'max': 'max-content',
        '50%': '50%',
        'thumb': '11px !important',
        '297': '297px',
        '255': '255px',
        '78%': '78%',
        '90%': '90%',
        '90vw': '90vw',
        '80vw': '80vw',
        '35%': '35%'
      },
      height: {
        '8': '8px',
        'header': '112px',
        'header-tab': '67.2px',
        '14': '14px',
        '20': '20px',
        '24': '24px',
        '31': '31px',
        '40': '40px',
        '47': '47px',
        '97': '97px',
        '196': '196px',
        '227': '227px',
        '257': '257px',
        '320': '320px',
        '340': '340px',
        '380': '380px',
        '423': '423px',
        '496': '496px',
        '507': '507px',
        '525': '525px',
        '537': '537px',
        'header-mob': '63px',
        'footer-min': '640px',
        '35%': '35%',
        'max': 'max-content',
      },
      screens: {
        'mob': { 'max': '701px' },
        'tab': { 'min': '702px', 'max': '1170px' },
        'tabxl': { 'min': '901px', 'max': '1170px' },
        'tabs': { 'min': '702px', 'max': '900px' }
      },
      margin: {
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '15': '15px',
        '17': '17px',
        '24': '24px',
        '26': '26px',
        '30': '30px',
        '36': '36px',
        '54': '54px',
        '64': '64px',
        '76': '76px',
        '96': '96px',
        '100': '100px',
        '124': '124px',
        '133': '133px'
      },
      padding: {
        '0i': '0 !important',
        '8': '8px',
        '10': '10px',
        '13': '13px',
        '14': '14px',
        '17': '17px',
        '18': '18px',
        '31': '31px',
        '35': '35px',
        '37': '37px',
        '42': '42px',
        '67': '67px',
        '125': '125px',
        '282': '282px'
      },
      inset: {
        'x': '100vw',
        'y': '-100vh'
      },
      lineHeight: {
        '24': '24px',
        '27': '27px',
        '31': '31px'
      },
      backgroundOpacity: {
        '20': '0.2'
      }
    },
    colors: {
      blue: '#0C233D',
      lightblue: '#153254',
      darkblue: "#0A192B",
      oceanic: '#7C98B7',
      white: '#fff',
      lightgray: '#F3F7FC',
      pink: '#FFAEAA',
      lightpink: '#FF8C87',
      red: '#EB4A43',
      darkred: "#BA3630",
      sand: '#DBC8A5',
      transparent: 'transparent'
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '25': '0.25',
      '40': '0.4',
      '50': '0.5',
      '60': '0.6',
      '75': '0.75',
      '80': '0.8',
      '100': '1',
    },
    fontSize: {
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '25': '25px',
      '28': '28px',
      '32': '32px',
      '34': '34px',
      '36': '36px',
      '40': '40px',
      '44': '44px',
      '70': '70px'
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.book': {
          fontFamily: '"Avenir Book", Montserrat, sans-serif',
          fontWeight: 'normal',
          fontStyle: 'normal'
        },
        '.av': {
          fontFamily: 'Avenir, Montserrat, sans-serif',
          fontWeight: 'normal',
          fontStyle: 'normal'
        },
        '.av-h': {
          fontFamily: 'Avenir, Montserrat, sans-serif',
          fontWeight: 700,
          fontStyle: 'normal'
        },
        '.av-l': {
          fontFamily: 'Avenir, Montserrat, sans-serif',
          fontWeight: 300,
          fontStyle: 'normal'
        },
        '.av-m': {
          fontFamily: 'Avenir, Montserrat, sans-serif',
          fontWeight: 500,
          fontStyle: 'normal'
        },
        '.av-b': {
          fontFamily: 'Avenir, Montserrat, sans-serif',
          fontWeight: 900,
          fontStyle: 'normal'
        },
        '.scale-m': {
          transform: 'scale(0.6)',
          transformOrigin: 'top left'
        },
        '.scale-f': {
          transform: 'scale(0.65)',
          transformOrigin: 'top center'
        },
        '.bb-white': {
          borderBottomColor: '#fff'
        },
        '.tab-nav-title-p': {
          padding: '0 12px !important'
        },
        '.tab-nav-title-w': {
          width: '170px !important'
        },
        '.tab-nav-title-w2': {
          width: '120px !important'
        },
        '.l-14': {
          left: '-14px'
        },
        '.r-17': {
          right: '-17px'
        },
        '.t-20': {
          top: '-20px'
        },
        '.t-115': {
          top: '115px'
        },
        '.l-31': {
          left: '-31px'
        },
        '.b-41': {
          bottom: '41px'
        },
        '.overflow-wrap': {
          overflowWrap: 'normal'
        },
        '.back-none': {
          background: 'none'
        },
        '.tap-none': {
          WebkitTapHighlightColor: "transparent",
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}
