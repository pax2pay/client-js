import { isly } from "isly"

export type ConfirmationOfPayeeResponseStatus = typeof ConfirmationOfPayeeResponseStatus.values[number]

export namespace ConfirmationOfPayeeResponseStatus {
	export const values = ["confirmed", "close match", "no match", "not supported"] as const
	export const type = isly.string(values)
	export const is = type.is
}
