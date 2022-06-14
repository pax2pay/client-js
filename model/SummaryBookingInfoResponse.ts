export interface SummaryBookingInfoResponse {
	leadPassengerName?: string
	agentBookingReference?: string
	type: "SUMMARY"
	bookingInfoIdentifier: string
	trackingId: string
}

export namespace SummaryBookingInfoResponse {
	export function is(value: SummaryBookingInfoResponse | any): value is SummaryBookingInfoResponse {
		return (
			typeof value == "object" &&
			value.type == "SUMMARY" &&
			(value.leadPassengerName == undefined || typeof value.leadPassengerName == "string") &&
			(value.agentBookingReference == undefined || typeof value.agentBookingReference == "string") &&
			typeof value.bookingInfoIdentifier == "string" &&
			typeof value.trackingId == "string"
		)
	}
}
