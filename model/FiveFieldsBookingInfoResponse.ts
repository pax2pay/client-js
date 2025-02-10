export interface FiveFieldsBookingInfoResponse {
	type?: "FIVE_FIELDS"
	format?: "five fields"
	bookingInfoIdentifier?: string
	agentBookingReference?: string
	departureDate?: string
	supplierBookingReference?: string
	leadPassengerName?: string
	supplierCode?: string
	trackingId?: string
}

export namespace FiveFieldsBookingInfoResponse {
	export function is(value: FiveFieldsBookingInfoResponse | any): value is FiveFieldsBookingInfoResponse {
		return (
			typeof value == "object" &&
			(value.type == "FIVE_FIELDS" || value.format == "five fields") &&
			(value.bookingInfoIdentifier == undefined || typeof value.bookingInfoIdentifier == "string") &&
			(value.agentBookingReference == undefined || typeof value.agentBookingReference == "string") &&
			(value.departureDate == undefined || typeof value.departureDate == "string") &&
			(value.supplierBookingReference == undefined || typeof value.supplierBookingReference == "string") &&
			(value.leadPassengerName == undefined || typeof value.leadPassengerName == "string") &&
			(value.supplierCode == undefined || typeof value.supplierCode == "string") &&
			(value.trackingId == undefined || typeof value.trackingId == "string")
		)
	}
}
