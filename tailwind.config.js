module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        // Default styling for Typography plugin.
        DEFAULT: {
          css: {
            // maxWidth: 'none',
            h1: {
              // fontSize: '2rem',
              // marginTop: '2.5rem',
              // marginBottom: '0.5rem',
            },
            a: {
              color: theme('colors.blue.500'),
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
