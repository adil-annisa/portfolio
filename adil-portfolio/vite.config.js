import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  publicDir: "site-public",
  build: {
    rollupOptions: {
      input: { home: "index.html", helm: "work/helm/index.html" },
    },
  },
});
