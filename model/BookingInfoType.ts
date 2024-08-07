import { isly } from "isly"

export type BookingInfoType = typeof BookingInfoType.types[number]

export namespace BookingInfoType {
	export const types = ["HOTEL", "FLIGHT", "INVOICE", "FIVE_FIELDS", "SUMMARY"] as const
	export const type = isly.string<BookingInfoType>(types)
	export const is = type.is
}
