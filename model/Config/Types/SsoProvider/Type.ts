import { isly } from "isly"

// SsoProviderType
export type Type = typeof Type.values[number]

export namespace Type {
	export const values = ["GOOGLE"] as const
	export const type = isly.string(values)
	export const is = type.is
}
