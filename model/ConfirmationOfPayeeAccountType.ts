import { isly } from "isly"

export type ConfirmationOfPayeeAccountType = typeof ConfirmationOfPayeeAccountType.values[number]

export namespace ConfirmationOfPayeeAccountType {
	export const values = ["PERSONAL", "BUSINESS"] as const
	export const type = isly.string(values)
	export const is = type.is
}
