import gltf from "rollup-plugin-gltf";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            plugins: [
                gltf({
                    include: '.gltf',
                    inlineAssetLimit: 250 * 1024 * 1024, // 250kb
                    inline: true,
                }),
            ]
        },
    },
    publicDir: "./public"
});