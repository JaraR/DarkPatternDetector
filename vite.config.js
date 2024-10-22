import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { loadEnv, build, extensions, rollupOptions } from './dotenv.config.js'

export default function defineConfig({ mode }) {
    const { VITE_PORT, VITE_OPEN, VITE_BASE_PATH } = loadEnv(mode)
    const { OUTDIR, CSSCODESPLIT, SOURCEMAP, EMPTYOUTDIR, WARNINGLIMIT } = build
    const alias = {
        "@": resolve(__dirname, "./src"),
        assets: resolve(__dirname, "./src/assets"),
    }
    return {
        plugins: [react()],
        root: process.cwd(),
        resolve: {
            alias,
            extensions,
        },
        base: VITE_BASE_PATH,
        server: {
            host: '0.0.0.0',
            port: VITE_PORT,
            open: VITE_OPEN,
        },
        build: {
            rollupOptions,
            outDir: OUTDIR,
            sourcemap: SOURCEMAP,
            emptyOutDir: EMPTYOUTDIR,
            cssCodeSplit: CSSCODESPLIT,
            chunkSizeWarningLimit: WARNINGLIMIT,
        },
    }
}
