import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  base: "/silly_quizzes/",
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
