import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages 项目站地址为 https://<用户>.github.io/<仓库名>/
 * 构建前设置 VITE_BASE_PATH=/<仓库名>/（注意首尾斜杠）
 * 本地开发不设，保持默认 "/"
 */
function appBase(): string {
  const raw = process.env.VITE_BASE_PATH
  if (raw === undefined || raw === '' || raw === '/') return '/'
  const withLeading = raw.startsWith('/') ? raw : `/${raw}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}

const outDir = process.env.BUILD_OUT === 'docs' ? 'docs' : 'dist'

// https://vite.dev/config/
export default defineConfig({
  base: appBase(),
  build: {
    outDir,
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
