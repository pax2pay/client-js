import { isly } from "isly"

export type Status = typeof Status.values[number]

export namespace Status {
	export const values = ["TODO", "PROCESSING", "COMPLETED", "FAILED_TO_FINALISE", "CANCELLED"] as const
	export const type = isly.string(values)
	export const is = type.is
}
