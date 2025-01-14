import { isly } from "isly"

export type Tag = typeof Tag.values[number]

export namespace Tag {
	export const values = [] as const
	export const type = isly.string<Tag>(values)
	export const is = type.is
}
