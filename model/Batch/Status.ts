import { isly } from "isly"

export type Status = typeof Status.values[number]

export namespace Status {
	export const values = ["todo", "processing", "completed", "failed to finalise", "cancelled"] as const
	export const type = isly.string(values)
	export const is = type.is
}
