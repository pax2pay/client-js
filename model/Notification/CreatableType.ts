import { isly } from "isly"

export type CreatableType = typeof CreatableType.values[number]

export namespace CreatableType {
	export const values = ["news"] as const
	export const type = isly.string<CreatableType>(values)
	export const is = type.is
}
