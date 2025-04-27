import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ktracy2.github.io/',   // <-- important: use your GitHub repo name here
  plugins: [react()],
})