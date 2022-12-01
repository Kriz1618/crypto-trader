import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/crypto-trader/',
  plugins: [
    vue(),
    VitePWA({ 
      manifest: {
        name: 'Crypto Trader',
        short_name: 'CryptoTrader',
        description: 'Convert crypto coin to different coins',
        theme_color: '#f60de3',
        icons: [
          {
            src: 'bt.ico',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
