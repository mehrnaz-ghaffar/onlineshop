module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12 , 88% , 59%)'
      },
      height: {
        '400' : '44rem'
      }
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [],
}
