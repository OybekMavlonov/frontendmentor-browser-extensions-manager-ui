import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// import { defineConfig, loadEnv } from 'vite'
// const env = loadEnv(mode, process.cwd(), 'VITE_')
//
// console.log(import.meta.env)

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)) // Alias for src folder
        }
    },
     base: '/frontendmentor-browser-extensions-manager-ui/'
})