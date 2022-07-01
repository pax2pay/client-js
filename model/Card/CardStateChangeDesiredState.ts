const cardStateChangeDesiredState = ["CANCEL", "FREEZE", "THAW"] as const
export type CardStateChangeDesiredState = typeof cardStateChangeDesiredState[number]

export namespace CardStateChangeDesiredState {
	export function is(value: unknown): value is CardStateChangeDesiredState {
		return typeof value == "string" && cardStateChangeDesiredState.includes(value as CardStateChangeDesiredState)
	}
}
