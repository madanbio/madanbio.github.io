import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/madanbio.github.io/",
  build: {
    outDir: "root",   // 👈 GitHub Pages friendly
  },
});