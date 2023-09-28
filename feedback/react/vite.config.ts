import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if( command === "build" ) {
    return {
      plugins: [react()],
      base: "react/dist/"
    }
  } else {
    if( command === "serve" ) {
      return {
        plugins: [react()]
      }
    }
  }
})
