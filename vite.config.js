import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/my_portfolio/',
  plugins: [react()],
})
