import { defineConfig } from 'vite'

// Vite's built-in esbuild transformer handles React's automatic JSX runtime.
// Keeping this minimal also avoids the Babel transform path for this project.
export default defineConfig({})
