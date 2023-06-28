import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            // overwrite default .html entry
            input: '/path/index.tsx',
        },
    },
    plugins: [
      react()

    ],

})
