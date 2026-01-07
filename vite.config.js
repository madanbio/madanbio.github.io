import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/madanbio.github.io/",  // GitHub Pages repo path
  build: {
    outDir: "docs",               // Build directly into docs folder
  },
});
