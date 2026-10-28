import { isly } from "isly"

export type MerchantType = string

export namespace MerchantType {
	/** Suggested values for the create form. The server may return other types. */
	export const types = ["flight", "hotel"] as const
	export const type = isly.string()
	export const is = type.is
}
