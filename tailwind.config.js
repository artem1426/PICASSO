/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1540px',
      '2k': '2000px',
      '4k': '2600px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#0d6efd',
        fail: 'rgb(206,31,31)',
        success: '#2bb01e',
        dark: '#282c31',
        orange: '#f97316',
      },
      backgroundColor: {
        primary: '#0d6efd',
        fail: 'rgb(206,31,31)',
        success: '#2bb01e',
        dark: '#282c31',
        orange: '#f97316',
      },
      borderColor: {
        primary: '#0d6efd',
        fail: 'rgb(206,31,31)',
        success: '#2bb01e',
        dark: '#282c31',
        orange: '#f97316',
      },
      spacing: {
        xxl: '3rem', // 48px
        xl: '2.5rem', // 40
        lg: '2rem', // 32px
        m: '1.5rem', // 24px
        s: '1rem', // 16px
        xs: '0.5rem', // 8px
        text: '0.75rem', // 12px
      },
      padding: {
        lg: '3rem', // 48px
        m: '2.25rem', // 36px
        s: '1.5rem', // 24px
        xs: '0.75rem', // 12px
        xxs: '0.5rem', // 8px
      },
      animation: {
        expansion: 'expansion 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
