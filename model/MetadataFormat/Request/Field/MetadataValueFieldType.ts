import { isly } from "isly"

export type MetadataValueFieldType = typeof MetadataValueFieldType.values[number]

export namespace MetadataValueFieldType {
	export const values = ["string", "date", "datetime", "numeric", "integer"] as const
	export const type = isly.string(values)
	export const is = type.is
}
