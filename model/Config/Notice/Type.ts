import { isly } from "isly"

// ConfigurableNoticeType
export type Type = typeof Type.values[number]

export namespace Type {
	export const values = ["FUNDING_LIMIT"] as const
	export const type = isly.string(values)
	export const is = type.is
}
