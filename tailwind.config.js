/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "com-background-primary": "#F1F5F9",
        "com-background-disabled": "#e5e7eb",
        "com-border-primary": "#E2E8F0",
        "com-border-focus": "#93C5FD",
        "com-text-primary": "#475569",
        "com-text-placeholder": "#94A3B8"
      },
      transitionDuration: {
        short: "200ms",
        medium: "400ms",
        long: "600ms"
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

