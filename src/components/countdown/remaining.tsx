import { h } from 'preact'

type Props = {
	results: {
		title: string
		remainingTime: () => number
		status: 'IN_PROGRESS' | 'PAUSED' | 'STALE'
	}

	resumeCountdown: () => void
	clearCountdown: () => void
	pauseCountdown: () => void
}

function SandClockIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			class="h-12 w-12 self-center rotate-180 duration-100"
		>
			<path
				fill="currentColor"
				d="M6 2h12v6l-4 4l4 4v6H6v-6l4-4l-4-4V2m10 14.5l-4-4l-4 4V20h8v-3.5m-4-5l4-4V4H8v3.5l4 4M10 6h4v.75l-2 2l-2-2V6Z"
			/>
		</svg>
	)
}

export function CountdownRemaining(props: Props) {
	const isActive = props.results.remainingTime() > 0
	const countdownTimer = isActive
		? `${props.results.remainingTime()} minutes remaining`
		: 'Time out.'
	return (
		<section class="h-full w-full container mx-auto max-w-xl flex flex-col justify-center space-y-3">
			<h2 class="text-center text-xl font-bold">{props.results.title}</h2>
			<p class="text-center "> {countdownTimer}</p>
			<SandClockIcon />
			<aside class="w-full mt-20 flex flex-row justify-center items-center space-x-10 c-neutral-50">
				{isActive ? (
					props.results.status === 'IN_PROGRESS' ? (
						<button
							class="rounded-lg bg-neutral-400 p-3 w-32 hover:opacity-60 duration-100 ease-in-out"
							onClick={props.pauseCountdown}
						>
							Pause
						</button>
					) : (
						<button
							class="rounded-lg bg-neutral-400 p-3 w-32 hover:opacity-60 duration-100 ease-in-out"
							onClick={props.resumeCountdown}
						>
							Resume
						</button>
					)
				) : null}
				<button
					class="rounded-lg bg-red-400 p-3 w-32 hover:opacity-60 duration-100 ease-in-out"
					onClick={props.clearCountdown}
				>
					Reset
				</button>
			</aside>
		</section>
	)
}
