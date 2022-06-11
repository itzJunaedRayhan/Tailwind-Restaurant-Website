module.exports = {
  mode: 'jit',
  purge: ['./dist/*.{html,js}'],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '576px',
      'md': '768px',
      'lg': '990px',
      'xl': '1200px'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        'primary': '#EEBF00',
        'secondary': '#232B38',
        'ternary': '#6C6C6C',
        'danger': '#FE4545',
        'pure': '#FEFEFE',
        'light': '#F0F0F0',
        'heaven': '#FFFFFF',
        'footer': '#2D333F'
      },
      backgroundImage: {
        'hero' : "url('/dist/images/hero.png')"
      }
    },
  },
  plugins: [],
}