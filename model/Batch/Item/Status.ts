import { isly } from "isly"

export type Status = typeof Status.values[number]

export namespace Status {
	export const values = ["todo", "successful", "failed", "canceled", "failed import", "importing"] as const
	export const type = isly.string(values)
}
