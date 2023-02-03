import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: { core: './lib/core/index.ts', react: './lib/react/index.ts' },
      fileName: (_format, fileName) => `${fileName}.js`,
    },
    outDir: '.',
    rollupOptions: {
      output: {
        preserveModules: true,
        compact: true,
      }
    }
  },
  plugins: [dts()],
})
