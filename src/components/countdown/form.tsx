import { JSX } from 'preact/jsx-runtime'
import { h } from 'preact'
export function CountdownForm(props: {
	initializeCountdown: (e: JSX.TargetedEvent<HTMLFormElement, Event>) => void
	errors: string | null
}) {
	return (
		<form
			onSubmit={props.initializeCountdown}
			class=" flex flex-col justify-center space-y-5 container mx-auto max-w-xl p-2"
		>
			<h2 class="text-center text-xl font-semibold">Create new countdown</h2>
			<aside class="flex flex-col justify-center space-y-2">
				<label class="font-semibold" htmlFor="hours">
					Title
				</label>
				<input
					class="rounded-lg p-3 outline-none bg-purple-100"
					type="text"
					name="title"
					placeholder="ie. My first cronometre!"
				/>
			</aside>
			<aside class="flex flex-col justify-center space-y-2">
				<label class="font-semibold" htmlFor="hours">
					Hours
				</label>
				<input
					class="rounded-lg p-3 outline-none bg-purple-100"
					type="number"
					name="hours"
					placeholder="ie. 0"
				/>
			</aside>
			<aside class="flex flex-col justify-center space-y-2">
				<label class="font-semibold" htmlFor="minutes">
					Minutes
				</label>
				<input
					class="rounded-lg p-3 outline-none bg-purple-100"
					type="number"
					name="minutes"
					placeholder="ie. 00"
				/>
			</aside>
			<button
				class="bg-purple-500 p-2 w-full max-w-xl rounded-lg c-white font-medium mt-4"
				type="submit"
			>
				Initialize countdown
			</button>
			<p class="c-red-500 h-5">{props.errors ? props.errors : null}</p>
		</form>
	)
}
