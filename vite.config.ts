import { defineConfig } from 'vite'
import typescript from "@rollup/plugin-typescript";
import multi from "@rollup/plugin-multi-entry";

export default defineConfig({
  build: {
    lib: {
      entry: ['./lib/index.ts', './lib/react/index.ts'],
      name: 'Beject',
      fileName: 'index',
    },
    rollupOptions: {
      plugins: [
        multi({
          entryFileName: 'index.js',
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: "dist",
          exclude: ["**/*.test.ts", "**/*.spec.ts"],
        }),
      ]
    }
  }
})
