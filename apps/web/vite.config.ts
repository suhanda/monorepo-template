import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";
import { VitePWA } from "vite-plugin-pwa";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import chroma from "chroma-js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        TanStackRouterVite({}),
        react(),
        sassDts({
            global: {
                generate: true,
                outputFilePath: path.resolve(__dirname, "./src/style.d.ts"),
            },
        }),
        VitePWA({
            registerType: "autoUpdate",
            devOptions: {
                enabled: true,
            },
            manifest: {
                theme_color: chroma("darkBlue").hex(),
            },
        }),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern",
            },
        },
    },
});
