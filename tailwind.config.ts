import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#07111f", brand: "#7c3aed", signal: "#15b8a6" } } },
  plugins: []
};
export default config;
