import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "data/users.env") });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint],
  // server: {
  //   port: 8000,
  // },
  // Only neccessary if you want to use another name, and by default import.meta.env always return the serialization of the data in the file
  // define: {
  //   "import.meta.env": JSON.stringify(process.env),
  // },
});
