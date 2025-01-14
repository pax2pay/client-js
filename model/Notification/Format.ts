import { isly } from "isly"

export type Format = typeof Format.values[number]

export namespace Format {
	export const values = ["markdown", "plain text"] as const
	export const type = isly.string<Format>(values)
	export const is = type.is
}
