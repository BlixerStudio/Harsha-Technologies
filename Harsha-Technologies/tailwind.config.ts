import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101827",
        muted: "#5a6473",
        line: "#d9e2ec",
        brand: {
          blue: "#0b5cad",
          navy: "#12365f",
          green: "#16a34a",
          gold: "#f5b942",
          soft: "#f6f8fb"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 24, 39, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
