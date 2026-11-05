import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: { host: "::", port: 8080 },
  plugins: [react()],
  // Navegadores atuais: evita código de compatibilidade desnecessário ("JavaScript legado" no PageSpeed).
  build: { target: "es2022", cssMinify: true },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
