import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint"; // 🔹 Eslint
import tailwindcss from "@tailwindcss/vite"; // 🔹 Tailwind

export default defineConfig({
  plugins: [react(), eslint(), tailwindcss()], // 🔹 ESLint ve Tailwind eklendi
});
