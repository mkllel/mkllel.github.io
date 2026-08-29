import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // This repository is served from the root of mkllel.github.io.
  base: '/',
  esbuild: command === 'build'
    ? { drop: ['console', 'debugger'] }
    : undefined,
}))
