/* vite相关 */
import dotenv from 'dotenv'

/* build config */
export const build = {
    OUTDIR: 'dist',
    SSCODESPLIT: false,
    SOURCEMAP: false,
    EMPTYOUTDIR: true,
    WARNINGLIMIT: 4000,
}

export const extensions = ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']

/**
 * Read all environment variable configuration files to process.env
 */
export function loadEnv(mode) {
    const ret = {}
    const envList = [`.env.${mode}.local`, `.env.${mode}`, '.env.local', '.env']
    envList.forEach(e => {
        dotenv.config({ path: e })
    })
    for (const envName of Object.keys(process.env)) {
        let realName = process.env[envName].replace(/\\n/g, '\n')
        realName = realName === 'true' ? true : realName === 'false' ? false : realName
        if (envName === 'VITE_PORT') realName = Number(realName)
        if (envName === 'VITE_OPEN') realName = Boolean(realName)
        if (envName === 'VITE_PROXY') {
            try {
                realName = JSON.parse(realName)
            } catch (error) {
                realName = ''
            }
        }
        ret[envName] = realName
        if (typeof realName === 'string') {
            process.env[envName] = realName
        } else if (typeof realName === 'object') {
            process.env[envName] = JSON.stringify(realName)
        }
    }
    return ret
}

/**
 * rollup build config
*/
export const rollupOptions = {
    output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames(assetInfo) {
            if (assetInfo.name.endsWith('.css')) {
                return 'css/[name]-[hash].css'
            }
            const imgExts = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.ico']
            if (imgExts.some(ext => assetInfo.name.endsWith(ext))) {
                return 'imgs/[name]-[hash].[ext]'
            }
            if (assetInfo.name.endsWith('.json')) {
                return 'json/[name]-[hash].[ext]'
            }
            return 'assets/[name]-[hash].[ext]'
        },
    }
}