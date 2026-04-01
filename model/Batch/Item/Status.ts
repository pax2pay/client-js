import { isly } from "isly"

export type Status = (typeof Status.values)[number]

export namespace Status {
	export const values = ["todo", "processing", "successful", "failed", "cancelled", "failed import"] as const
	export const type = isly.string(values)
}
