import { isly } from "isly"

export type Scheme = typeof Scheme.types[number]

export namespace Scheme {
	export const types = ["VISA", "MASTERCARD", "AMERICAN_EXPRESS", "DINERS_CLUB"] as const
	export const type = isly.string(types)
	export const is = type.is
}
