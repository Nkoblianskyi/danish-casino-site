import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
          DEFAULT: "#3b82f6", // blue-500
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#fbbf24", // amber-400
          foreground: "#1f2937",
        },
        destructive: {
          DEFAULT: "#ef4444", // red-500
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#374151", // gray-700
          foreground: "#9ca3af", // gray-400
        },
        accent: {
          DEFAULT: "#1e40af", // blue-800
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#1f2937", // gray-800
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#1f2937", // gray-800
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#ffffff",
            a: {
              color: "#3b82f6",
              "&:hover": {
                color: "#60a5fa",
              },
            },
            h1: {
              color: "#ffffff",
            },
            h2: {
              color: "#ffffff",
            },
            h3: {
              color: "#ffffff",
            },
            h4: {
              color: "#ffffff",
            },
            strong: {
              color: "#ffffff",
            },
            code: {
              color: "#ffffff",
            },
            blockquote: {
              color: "#9ca3af",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config
