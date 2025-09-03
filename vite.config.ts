import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tämä kertoo Vite-buildille, että sovellus tulee repon alikansioon
  base: '/terapiapalvelu-yhdistaja/',
})
