import { useSignal, effect } from '@preact/signals'
import { useRef } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime'

type CountdownState = {
	values: { minutes: number; title: string }
	status: 'STALE' | 'IN_PROGRESS' | 'PAUSED'
}
type CountdownFields = {
	title: string
	hours: number
	minutes: number
}
type FormErrors = {
	message: string | null
}
export function useCountdownTimer() {
	const countdown = useSignal<CountdownState>({
		values: { minutes: 0, title: '' },
		status: 'STALE',
	})
	const errors = useSignal<FormErrors>({ message: null })

	const remainingTime = () => countdown.value.values.minutes

	const pauseCountdown = () => {
		countdown.value = { ...countdown.value, status: 'PAUSED' }
	}
	const resumeCountdown = () => {
		countdown.value = { ...countdown.value, status: 'IN_PROGRESS' }
	}
	const clearCountdown = () => {
		countdown.value = { status: 'STALE', values: { title: '', minutes: 0 } }
	}
	const initializeCountdown = (e: JSX.TargetedEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)

		const countdownValues = Object.fromEntries(
			formData
		) as unknown as CountdownFields
		const parsedCountdownValues: CountdownFields = {
			...countdownValues,
			hours: Number(countdownValues.hours),
			minutes: Number(countdownValues.minutes),
		}

		if (!parsedCountdownValues.title.length || parsedCountdownValues.minutes < 2)
			errors.value = { message: 'Please, fill up the following fields.' }
		else
			countdown.value = {
				values: {
					minutes:
						parsedCountdownValues.hours * 60 + (parsedCountdownValues.minutes - 1),
					title: parsedCountdownValues.title,
				},
				status: 'IN_PROGRESS',
			}
	}
	effect(() => {
		const { status, values } = countdown.value
		const intervalTime = 60000
		const timer = setTimeout(() => {
			if (status !== 'PAUSED' && values.minutes > 0) {
				countdown.value = {
					status: status,
					values: {
						...values,
						minutes: values.minutes - 1,
					},
				}
			}
		}, intervalTime)

		return () => clearInterval(timer)
	})

	return {
		countdown,
		remainingTime,
		errors,
		initializeCountdown,
		pauseCountdown,
		resumeCountdown,
		clearCountdown,
	}
}
