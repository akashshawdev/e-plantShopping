import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // base "/" for local dev, repo name for GitHub Pages build
  base: command === "build" ? "/paradise-nursery/" : "/",
}));
