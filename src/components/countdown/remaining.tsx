import { MutableRef, Ref } from 'preact/hooks'

type Props = {
	results: {
		title: string
		remainingTime: () => number
		status: 'IN_PROGRESS' | 'PAUSED' | 'STALE'
	}
	audioRef: Ref<HTMLAudioElement | undefined>
	resumeCountdown: () => void
	clearCountdown: () => void
	pauseCountdown: () => void
}

function SandClockIcon(props: { hasFinished: boolean }) {
	const baseClassStyles = 'h-12 w-12 self-center  duration-300'

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			class={`${baseClassStyles} ${props.hasFinished ? 'rotate-180' : null}`}
		>
			<path
				fill="currentColor"
				d="M6 2h12v6l-4 4l4 4v6H6v-6l4-4l-4-4V2m10 14.5l-4-4l-4 4V20h8v-3.5m-4-5l4-4V4H8v3.5l4 4M10 6h4v.75l-2 2l-2-2V6Z"
			/>
		</svg>
	)
}
function PauseIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			class="h-6 w-6"
		>
			<path
				fill="currentColor"
				d="M12 8v16H8V8h4m0-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm12 2v16h-4V8h4m0-2h-4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
			/>
		</svg>
	)
}
function ResumeIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			class="h-6 w-6"
		>
			<path fill="currentColor" d="M6 18V6h2v12H6Zm4 0l10-6l-10-6v12Z" />
		</svg>
	)
}
function ClearIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 15 15"
			class="h-6 w-6"
		>
			<path
				fill="currentColor"
				fill-rule="evenodd"
				d="M4.854 2.146a.5.5 0 0 1 0 .708L3.707 4H9a4.5 4.5 0 1 1 0 9H5a.5.5 0 0 1 0-1h4a3.5 3.5 0 1 0 0-7H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0Z"
				clip-rule="evenodd"
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
			<SandClockIcon hasFinished={isActive} />
			<aside class="w-full mt-20 flex flex-row justify-center items-center space-x-10 c-neutral-50">
				{isActive ? (
					props.results.status === 'IN_PROGRESS' ? (
						<button
							class="flex flex-row justify-center items-center space-x-2 rounded-lg bg-neutral-400 p-3 w-32 hover:opacity-60 duration-100 ease-in-out"
							onClick={props.pauseCountdown}
						>
							<PauseIcon />
							<span> Pause</span>
						</button>
					) : (
						<button
							class=" flex flex-row justify-center items-center space-x-2 rounded-lg bg-neutral-400 p-3 w-32 hover:opacity-60 duration-100 ease-in-out"
							onClick={props.resumeCountdown}
						>
							<ResumeIcon />
							<span>Resume</span>
						</button>
					)
				) : null}
				<button
					class="flex flex-row justify-center items-center space-x-2 rounded-lg bg-red-400 p-3 w-32 hover:opacity-60 duration-100 ease-in-out"
					onClick={props.clearCountdown}
				>
					<ClearIcon />
					<span>Reset</span>
				</button>
			</aside>
		</section>
	)
}
