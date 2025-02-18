import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  base: "/",
  build: {
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      external: ["hast"],
    },
  },
  optimizeDeps: {
    exclude: ["solid-styled-components", "hast"],
  },
});
