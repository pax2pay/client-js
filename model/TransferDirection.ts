import { isly } from "isly"

export type TransferDirection = typeof TransferDirection.values[number]

export namespace TransferDirection {
	export const values = ["IN", "OUT"] as const
	export const type = isly.string<TransferDirection>(values)
	export const is = type.is
}
