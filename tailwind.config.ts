import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6366F1",
          foreground: "#F0F9FF",
        },
        secondary: {
          DEFAULT: "#F0F9FF",
          foreground: "#0F172A",
        },
        accent: {
          DEFAULT: "#06B6D4",
          foreground: "#F0F9FF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyber: {
          DEFAULT: "#06B6D4",
          muted: "#0891B2",
          dark: "#0E7490",
        },
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #06B6D4, 0 0 25px #06B6D4",
          },
          "50%": {
            boxShadow: "0 0 20px #06B6D4, 0 0 50px #06B6D4",
          },
        },
      },
      animation: {
        typing: "typing 3.5s steps(40, end)",
        "cursor-blink": "blink .75s step-end infinite",
        glow: "glow 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;