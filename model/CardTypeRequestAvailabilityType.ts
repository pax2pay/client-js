import { isly } from "isly"

export type CardTypeRequestAvailabilityType = typeof CardTypeRequestAvailabilityType.values[number]

export namespace CardTypeRequestAvailabilityType {
	export const values = ["organisation", "roleset", "category", "user"] as const
	export const type = isly.string<CardTypeRequestAvailabilityType>()
	export const is = type.is
}
