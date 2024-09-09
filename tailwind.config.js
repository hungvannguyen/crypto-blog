/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary':'#1F1F1F',
        'tertiary':'#111111',
        'quaternary':'#E6E6E6',
        'quinary':'#FF9900',
        'senary':'#7E7E7E',
        'septenary':'#9B9B9B',
        'octonary':'#181A20',
        'nonary':'#EFEFEF',
        'denary':'#575757',
        'eleven':'rgba(99, 99, 99, 0.1)',
      },
      fontSize: {
        xs: '0.625rem',
      }
    },
  },
  plugins: [],
}

