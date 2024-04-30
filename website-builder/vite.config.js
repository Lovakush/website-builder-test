import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default {
//   server: {
//     hmr: {
//       overlay: false
//     }
//   }
// }

// // https://vitejs.dev/config/
// export defineConfig({
//   plugins: [react()],
  
// })
// // vite.config.js

export default defineConfig({
  server: {
    hmr: {
      overlay: false
    }
  },
  plugins: [react()],
  css: {
    modules: true,
  },
});


