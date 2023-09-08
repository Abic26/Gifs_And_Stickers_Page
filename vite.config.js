import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  VitePWA({
    manifest:{
      name:"Pwa de gif von Vue",
      short_name:"Gif_Pwa",
      description: "Esta es una pagina de gif realizada con vue.js y vite pwa creada por tu papa Abic",
      theme_color: "#333",
      icons:[
        {
            "src": "logo_app.gif",
            "sizes": "192x192",
            "type": "image/gif"
        },
      ]
      
      
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
