import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        studio: {
          950: "#08080A",
          900: "#0C0D12",
          850: "#101117",
          800: "#161722",
          700: "#222433",
          600: "#32354A",
        },
        sunset: {
          peach: "#FF5A5F",
          coral: "#FF6B6B",
          amber: "#FF8E53",
          gold: "#FFA07A",
          rose: "#E5989B",
          lavender: "#B39DDB",
          violet: "#8250DC",
        },
        figma: {
          blue: "#3B82F6",
          selection: "rgba(59, 130, 246, 0.15)",
        },
      },
      fontFamily: {
        tactical: ["var(--font-orbitron)", "sans-serif"],
        editorial: ["var(--font-instrument-serif)", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "sunset-glow":
          "radial-gradient(ellipse at 25% 25%, rgba(255, 90, 95, 0.15) 0%, rgba(130, 80, 220, 0.08) 45%, rgba(8, 8, 10, 0) 70%)",
        "sunset-gradient":
          "linear-gradient(90deg, #FF5A5F 0%, #FF8E53 30%, #E5989B 65%, #B39DDB 100%)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
