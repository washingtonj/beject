import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: ['./lib/index.ts'],
      name: 'Beject',
      fileName: 'beject',
    }
  },
  plugins: [dts()]
})
