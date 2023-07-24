import { useEffect, useState } from 'preact/hooks'

type Theme = 'light' | 'dark'

export const useTheme = () => {
	const storedTheme = localStorage.getItem('theme') as Theme | null
	const actualTheme = storedTheme ? storedTheme : ('light' satisfies Theme)
	const [theme, setTheme] = useState(actualTheme)
	function toggleTheme() {
		setTheme((v) => (v === 'dark' ? 'light' : 'dark'))
	}

	useEffect(() => {
		const rootEl = document.documentElement
		if (theme === 'dark') {
			rootEl.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else if (theme === 'light') {
			rootEl.classList.remove('dark')
			localStorage.removeItem('theme')
		}
	}, [theme])
	return { theme, toggleTheme }
}
