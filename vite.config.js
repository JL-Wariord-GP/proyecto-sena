import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  css: {
    modules: {
      generateScopedName: "[local]", // Utiliza solo el nombre local sin prefijo de módulo
      hashPrefix: "", // Evita que se agregue cualquier prefijo hash
    },
  },
});
