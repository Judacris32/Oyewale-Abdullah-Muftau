import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  // The page container is defined in globals.css (fluid side gutter), so Tailwind's own is switched off.
  corePlugins: { container: false },
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        beige: "#F4ECE0",
        sand: "#F0E4D2",
        ink: { DEFAULT: "#1B1F1D", soft: "#3E4541", muted: "#636D68" },
        line: "#E6DDCF",
        green: {
          DEFAULT: "#0F2E2A",
          deep: "#0B2421",
          mid: "#173F39",
          accent: "#1F6B5C",
          soft: "#E4EFEB",
        },
        gold: {
          DEFAULT: "#C68F43",
          text: "#94621F",
          light: "#E8C68C",
          soft: "#F7EAD5",
        },
        brown: "#2A1E16",
        plum: { DEFAULT: "#5E4489", soft: "#EEE8F6" },
        clay: { DEFAULT: "#A5462F", soft: "#F8E5DE" },
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Hanken Grotesk Variable"', "system-ui", "sans-serif"],
        script: ['"Allura"', "cursive"],
      },
      boxShadow: {
        soft: "0 24px 50px -30px rgba(40, 30, 15, 0.45)",
        lift: "0 30px 60px -30px rgba(15, 46, 42, 0.6)",
      },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};

export default config;
