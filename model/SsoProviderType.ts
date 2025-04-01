import { isly } from "isly"

export type SsoProviderType = typeof SsoProviderType.values[number]

export namespace SsoProviderType {
	export const values = ["GOOGLE"] as const
	export const type = isly.string(values)
	export const is = type.is
}
