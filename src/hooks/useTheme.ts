import { effect, useSignal } from '@preact/signals'

type Theme = 'light' | 'dark'
export const useTheme = () => {
	const storedTheme = localStorage.getItem('theme') as Theme | null
	const actualTheme = storedTheme ? storedTheme : ('light' satisfies Theme)
	const theme = useSignal<Theme>(actualTheme)

	function toggleTheme() {
		theme.value === 'dark' ? 'light' : 'dark'
	}

	effect(() => {
		const rootEl = document.documentElement
		if (theme.value === 'dark') {
			rootEl.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else if (theme.value === 'light') {
			rootEl.classList.remove('dark')
			localStorage.removeItem('theme')
		}
	})
	return { theme, toggleTheme }
}
