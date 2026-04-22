import { env } from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  const isGitHubPages = env.GITHUB_ACTIONS === 'true'
  const repoName = env.GITHUB_REPOSITORY?.split('/')[1]

  return {
    base: isGitHubPages && repoName ? `/${repoName}/` : '/',
    plugins: [react(), tailwindcss()],
  }
})
