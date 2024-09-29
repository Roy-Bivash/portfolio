/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-text': 'var(--color-primary-text)',
        'secondary-text': 'var(--color-secondary-text)',
        'background-text': 'var(--color-background-text)',
        'background': 'var(--color-background)',
        'accent-text': 'var(--color-accent-text)',
        'accent-background': 'var(--color-accent-background)',
        'secondary-background': 'var(--color-secondary-background)',
      },
    },
  },
  plugins: [],
}

