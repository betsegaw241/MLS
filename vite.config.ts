import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      src: "/src",
      utils: "/src/utils",
      app: "/src/app",
      store: "src/store",
      styles: "src/styles",
      assets: "src/assets",
    },
  },
});
