import { defineConfig } from 'vite'

export default defineConfig({
    base: '/slides/', // Ensures correct path for GitHub Pages
    server: {
        fs: {
            allow: ['..'] // Ensures Slidev can read parent directories
        }
    }
})