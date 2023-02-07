import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: { core: './lib/core/index.ts', react: './lib/react/index.ts' },
      name: 'beject',
      formats: ['es', 'cjs'],
      fileName: (format, fileName) => `${fileName}.${format}.js`,
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
