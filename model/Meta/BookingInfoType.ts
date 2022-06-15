const bookingInfotype = ["HOTEL", "FLIGHT", "FIVE_FIELDS", "INVOICE", "SUMMARY"] as const
export type BookingInfoType = typeof bookingInfotype[number]

export namespace BookingInfoType {
	export function is(value: unknown): value is BookingInfoType {
		return typeof value == "string" && bookingInfotype.includes(value as BookingInfoType)
	}
}
