import { ComponentChildren, h } from 'preact'

import { CountdownForm } from './countdown/form'
import { CountdownRemaining } from './countdown/remaining'
import { useCountdownTimer } from './hooks/useCountdownTimer'

function AppContainer(props: { children: ComponentChildren }) {
	return (
		<main class="min-h-screen h-full flex flex-col justify-center space-y-3 container mx-auto max-w-xl w-full">
			{props.children}
		</main>
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
