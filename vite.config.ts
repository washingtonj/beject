import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: ['./lib/index.ts', './lib/react/index.ts'],
      name: 'Beject',
      fileName: 'index',
    }
  },
  plugins: [dts()]
})
