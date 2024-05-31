import { isly } from "isly"

export type MerchantType = typeof MerchantType.types[number]

export namespace MerchantType {
	export const types = ["flight", "hotel"] as const
	export const type = isly.string(types)
	export const is = type.is
}
