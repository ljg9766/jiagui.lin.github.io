import { copyFileSync } from 'node:fs'

/** GitHub Pages：复制 index.html 为 404.html，避免客户端路由刷新 404 */
const outDir = process.argv[2] || 'dist'
copyFileSync(`${outDir}/index.html`, `${outDir}/404.html`)
