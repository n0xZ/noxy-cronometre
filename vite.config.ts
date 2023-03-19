import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact(), Unocss({ presets: [presetUno()] })],
})
