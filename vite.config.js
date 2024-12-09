import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        sveltekit(),
    ],
    server:{
        fs: {
            allow:[".."],
        },
    },
    ssr: {
        noExternal: ['@googlemaps/js-api-loader']
    }
})
