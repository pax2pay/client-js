import { isly } from "isly"

export type MetadataValueFieldCategory = typeof MetadataValueFieldCategory.values[number]

export namespace MetadataValueFieldCategory {
	export const values = ["supplier reference", "agent reference", "customer name"] as const
	export const type = isly.string(values)
	export const is = type.is
}
