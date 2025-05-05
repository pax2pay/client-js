import { isly } from "isly"

export type CardStateChangeDesiredState = typeof CardStateChangeDesiredState.values[number]

export namespace CardStateChangeDesiredState {
	export const values = ["CANCEL", "FREEZE", "THAW"] as const
	export const type = isly.string<CardStateChangeDesiredState>(values)
	export const is = type.is
}
