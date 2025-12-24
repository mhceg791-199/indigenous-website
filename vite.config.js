import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "../../var/www/indigenous-mosaic", // Replace with your desired directory path
  },
  plugins: [react()],
})
