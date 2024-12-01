import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr({
    include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
      },
  }), react(), ],

  base: "/todo-list/",
})
