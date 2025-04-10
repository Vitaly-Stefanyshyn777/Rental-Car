import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, "src/components"),
      pages: resolve(__dirname, "src/pages"),
      styles: resolve(__dirname, "src/styles"),
      assets: resolve(__dirname, "src/assets"),
      "@redux": resolve(__dirname, "src/redux"),
    },
  },
  base: "/",
});
