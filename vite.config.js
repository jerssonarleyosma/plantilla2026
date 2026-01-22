import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@atoms": path.resolve(__dirname, "src/shared/atoms"),
      "@molecules": path.resolve(__dirname, "src/shared/molecules"),
      "@organisms": path.resolve(__dirname, "src/shared/organisms"),
      "@utils": path.resolve(__dirname, "src/shared/utils"),
      "@lib": path.resolve(__dirname, "src/shared/lib"),
    },
  },

  server: {
    port: 5173,
    strictPort: true,
  },
});
