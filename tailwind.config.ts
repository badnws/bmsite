import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const foil = "linear-gradient(90deg,#7C5D25 0%,#A0824B 14%,#C4A671 28%,#E2CBA3 41%,#F2E5C8 50%,#F8EDD4 58%,#EBD5AC 66%,#CDAF7A 76%,#82632B 100%)";
const hsl = (v: string) => "hsl(var(--" + v + ") / <alpha-value>)";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.5rem", lg: "2.5rem" }, screens: { "2xl": "1240px" } },
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "Garamond", '"Times New Roman"', "serif"],
        sans: ["Montserrat", '"Helvetica Neue"', "Arial", "sans-serif"],
        // TeX Gyre Pagella: desenho de Palatino com licença livre para web (GUST). Palatino Linotype não pode ser hospedada sem licença de webfont.
        serif: ['"TeX Gyre Pagella"', '"Palatino Linotype"', '"Book Antiqua"', "Palatino", "Georgia", "serif"],
      },
      colors: {
        border: hsl("border"), input: hsl("input"), ring: hsl("ring"),
        background: hsl("background"), foreground: hsl("foreground"),
        primary: { DEFAULT: hsl("primary"), foreground: hsl("primary-foreground") },
        secondary: { DEFAULT: hsl("secondary"), foreground: hsl("secondary-foreground") },
        destructive: { DEFAULT: hsl("destructive"), foreground: hsl("destructive-foreground") },
        muted: { DEFAULT: hsl("muted"), foreground: hsl("muted-foreground") },
        accent: { DEFAULT: hsl("accent"), foreground: hsl("accent-foreground") },
        popover: { DEFAULT: hsl("popover"), foreground: hsl("popover-foreground") },
        card: { DEFAULT: hsl("card"), foreground: hsl("card-foreground") },
        navy: { 50: "#F3F4F8", 100: "#E4E6EE", 200: "#C5C8D8", 400: "#6E769C", 600: "#333D6B", 700: "#1F2750", 800: "#141A3A", 850: "#081933", 900: "#0A0A3E", 950: "#080B21" },
        gold: { 50: "#F8EDD4", 100: "#F2E5C8", 200: "#EBD5AC", 300: "#E2CBA3", 400: "#CDAF7A", 500: "#C4A671", 600: "#B28F5A", 700: "#A0824B", 800: "#82632B", 900: "#7C5D25" },
        ink: "#03051C", silver: "#DCDCDF", paper: "#FBFAF7",
      },
      letterSpacing: { label: "0.18em", wide2: "0.14em", brand: "0.52em" },
      backgroundImage: { "gold-foil": foil, "gold-foil-diag": "linear-gradient(115deg,#7C5D25 0%,#C4A671 30%,#F8EDD4 52%,#CDAF7A 72%,#82632B 100%)" },
      borderRadius: { lg: "var(--radius)", md: "var(--radius)", sm: "var(--radius)" },
      boxShadow: {
        soft: "0 1px 3px rgba(8,11,33,.08), 0 1px 2px rgba(8,11,33,.04)",
        card: "0 6px 18px -6px rgba(8,11,33,.18), 0 2px 4px rgba(8,11,33,.05)",
        lift: "0 22px 48px -16px rgba(8,11,33,.30), 0 4px 10px rgba(8,11,33,.06)",
      },
      maxWidth: { measure: "68ch" },
      transitionTimingFunction: { brand: "cubic-bezier(.2,0,0,1)" },
      typography: {
        brand: {
          css: {
            "--tw-prose-body": "#1C1C22",
            "--tw-prose-headings": "#081933",
            "--tw-prose-links": "#1F2750",
            "--tw-prose-bold": "#080B21",
            "--tw-prose-quotes": "#081933",
            "--tw-prose-quote-borders": "#C4A671",
            "--tw-prose-bullets": "#B28F5A",
            "--tw-prose-counters": "#82632B",
          },
        },
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;
