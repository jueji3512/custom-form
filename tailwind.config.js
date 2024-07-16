/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "com-bg-primary": "#F1F5F9",
        "com-bg-disabled": "#e5e7eb",
        "com-border-primary": "#E2E8F0",
        "com-border-focus": "#93C5FD",
        "com-border-error": "#f87171",
        "com-border-error-focus": "#dc2626",
        "com-text-primary": "#475569",
        "com-text-placeholder": "#94A3B8",
        "com-text-error": "#fca5a5",
        "container-bg-hover-light": "#e2e8f0",
        "container-bg-hover-dark": "#52525b",
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

