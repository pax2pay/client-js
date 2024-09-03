import { isly } from "isly"

export type Inclusion = typeof Inclusion.values[number]

export namespace Inclusion {
	export const values = ["INCLUDE", "EXCLUDE", "ONLY"] as const
	export const type = isly.string(values)
	export const is = type.is
}
