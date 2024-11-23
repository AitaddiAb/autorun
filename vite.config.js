import os from "os";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const localIP = () =>
  Object.values(os.networkInterfaces())
    .flat()
    .find((i) => i.family === "IPv4" && !i.internal)?.address || "localhost";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8089,
    host: localIP(),
  },
});
