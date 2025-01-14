import { isly } from "isly"

export type Status = typeof Status.values[number]

export namespace Status {
	export const values = [
		"active",
		"completed",
		"rejected",
		"frozen",
		"closed",
		"expired",
		"pending",
		"approved",
		"declined",
	] as const
	export const type = isly.string(values)
	export const is = type.is
}
