export interface SummaryBookingInfoResponse {
	supplierBookingReference?: string
	agentBookingReference?: string
	type: "SUMMARY"
	bookingInfoIdentifier?: string
	trackingId?: string
}

export namespace SummaryBookingInfoResponse {
	export function is(value: SummaryBookingInfoResponse | any): value is SummaryBookingInfoResponse {
		return (
			typeof value == "object" &&
			value.type == "SUMMARY" &&
			(value.supplierBookingReference == undefined || typeof value.supplierBookingReference == "string") &&
			(value.agentBookingReference == undefined || typeof value.agentBookingReference == "string") &&
			(value.bookingInfoIdentifier == undefined || typeof value.bookingInfoIdentifier == "string") &&
			(value.trackingId == undefined || typeof value.trackingId == "string")
		)
	}
}
