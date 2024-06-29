import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json",
          dest: ".",
        },
        {
          src: "background.js",
          dest: ".",
        },
        {
          src: "content.js",
          dest: ".",
        },
        {
          src: "sample.css",
          dest: ".",
        },
      ],
    }),
  ],
});
