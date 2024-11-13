import { isly } from "isly"

export type SubFormatType = typeof SubFormatType.values[number]
export namespace SubFormatType {
	export const values = ["top2", "top5"] as const
	export function expectedInputLength(value: SubFormatType) {
		return value === "top2" ? 2 : 5
	}
	export const type = isly.string(values)
	export const is = type.is
}
