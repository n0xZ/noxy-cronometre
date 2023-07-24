import { JSX } from 'preact/jsx-runtime'

function ClockIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			class="h-6 w-6"
		>
			<path fill="currentColor" d="M10 8v6l4.7 2.9l.8-1.2l-4-2.4V8z" />
			<path
				fill="currentColor"
				d="M17.92 12A6.957 6.957 0 0 1 11 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23c-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 0 0 8.94-10h-2.02z"
			/>
			<path fill="currentColor" d="M20 5V2h-2v3h-3v2h3v3h2V7h3V5z" />
		</svg>
	)
}

export function CountdownForm(props: {
	initializeCountdown: (e: JSX.TargetedEvent<HTMLFormElement, Event>) => void
	errors: string | null
}) {
	return (
		<form
			onSubmit={props.initializeCountdown}
			class=" flex flex-col justify-center space-y-4 container mx-auto max-w-xl p-10 bg-white dark:bg-stone-900 shadow-md rounded-lg"
		>
			<h2 class="text-center text-xl font-semibold">Create new countdown</h2>
			<aside class="flex flex-col justify-center space-y-2">
				<label htmlFor="hours">Title</label>
				<input
					class="rounded-md p-3 outline-none border-2 border-neutral-100 dark:border-stone-800 focus:dark:border-stone-600  bg-transparent focus:border-neutral-400 "
					type="text"
					name="title"
					placeholder="ie. My first cronometre!"
					required
				/>
			</aside>

			<aside class="flex flex-col justify-center space-y-2">
				<label htmlFor="minutes">Minutes</label>
				<input
					class="rounded-md p-3 outline-none border-2 border-neutral-100 dark:border-stone-800  bg-transparent focus:border-neutral-400  focus:dark:border-stone-600"
					type="number"
					name="minutes"
					required
					placeholder="ie. 00"
				/>
			</aside>
			<button
				class="flex flex-row justify-center items-center space-x-2 bg-dark-800 dark:bg-stone-800 hover:opacity-90 duration-100 ease-in-out p-2 w-full max-w-xl rounded-md c-white font-medium mt-4"
				type="submit"
				title="Initialize countdown by clicking this button."
			>
				<ClockIcon />
				<span>Initialize countdown</span>
			</button>

			<p class="c-red-500 h-5">{props.errors ? props.errors : null}</p>
		</form>
	)
}
