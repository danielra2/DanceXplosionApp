import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Soluție: Adaugă .lottie la lista de asset-uri pentru a evita eroarea de parsare
  assetsInclude: ['**/*.lottie'] 
})