import { isly } from "isly"

export type CardTypeAvailabilityType = typeof CardTypeAvailabilityType.values[number]

export namespace CardTypeAvailabilityType {
	export const values = ["ORGANISATION", "ROLESET", "CATEGORY", "USER"] as const
	export const type = isly.string<CardTypeAvailabilityType>()
	export const is = type.is
}
