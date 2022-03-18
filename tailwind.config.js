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
            maxWidth: 'none',
            h1: {
              fontSize: '1.75rem',
              marginTop: '3rem',
              marginBottom: '0.5rem',
            },
            h2: {
              marginTop: '1.75rem',
              marginBottom: '0.5rem',
            },
            h3: {
              marginTop: '1.75rem',
              marginBottom: '0.5rem',
            },
            h4: {
              marginTop: '1.75rem',
              marginBottom: '0.25rem',
            },
            h5: {
              marginTop: '1.75rem',
              marginBottom: '0.25rem',
            },
            h6: {
              marginTop: '1.75rem',
              marginBottom: '0.25rem',
            },
            a: {
              color: theme('colors.blue.500'),
            },
            blockquote: {
              fontStyle: "normal",
              "& > p:before": {
                content: "none"
              },
              "& > p:after": {
                content: "none"
              },
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
