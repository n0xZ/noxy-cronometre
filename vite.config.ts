import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { VitePWA } from 'vite-plugin-pwa'
import Unocss from 'unocss/vite'
import { presetUno, presetWebFonts } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		Unocss({
			presets: [
				presetUno(),
				presetWebFonts({
					provider: 'bunny',
					fonts: { roboto: 'Roboto' },
				}),
			],
		}),
		VitePWA({
			injectRegister: 'auto',
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico'],
			manifest: {
				name: 'Liuz',
				short_name: 'Liuz',
				description: 'Handle your tasks based an countdown',
				theme_color: '#312e81',
				background_color: '#312e81',
				start_url: '/',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
})
