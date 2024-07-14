import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import { resolve, dirname } from 'path'


export default defineConfig({
    assetsInclude: ['**/*.glb'],

    plugins: [Inspect()],
    build:{
        rollupOptions: {
            input: {
                main: resolve(dirname(import.meta.url), 'index.html'),
                login: resolve(dirname(import.meta.url), 'src/pages/login/login.')
            }
        }

    }
});