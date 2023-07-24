import { ComponentChildren } from 'preact'

import { CountdownForm } from './components/countdown/form'
import { CountdownRemaining } from './components/countdown/remaining'
import { useCountdownTimer } from './hooks/useCountdownTimer'
import { ThemeSwitcher } from './components/theme/theme-switch'

function AppContainer(props: { children: ComponentChildren }) {
	return (
		<>
			<header class="p-5">
				<nav class="flex flex-row items-center justify-between container mx-auto max-w-xl">
					<p>© n0xZ. Powered by Preact 💜</p>
					<ThemeSwitcher />
				</nav>
			</header>
			<main class="min-h-screen  space-y-3 container mx-auto max-w-xl w-full  grid place-items-center ">
				{props.children}
			</main>
		</>
	)
}

export function App() {
	const {
		remainingTime,
		countdown,

		errors,
		initializeCountdown,
		clearCountdown,
		pauseCountdown,
		resumeCountdown,
	} = useCountdownTimer()

	return (
		<AppContainer>
			{countdown.value.status === 'STALE' ? (
				<CountdownForm
					initializeCountdown={initializeCountdown}
					errors={errors.value.message}
				/>
			) : (
				<CountdownRemaining
					results={{
						remainingTime,
						title: countdown.value.values.title,
						status: countdown.value.status,
					}}
					resumeCountdown={resumeCountdown}
					clearCountdown={clearCountdown}
					pauseCountdown={pauseCountdown}
				/>
			)}
		</AppContainer>
	)
}
