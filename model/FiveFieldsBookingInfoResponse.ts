export interface FiveFieldsBookingInfoResponse {
	type: "FIVE_FIELDS"
	bookingInfoIdentifier: string
	agentBookingReference?: string
	departureDate?: string
	supplierBookingReference?: string
	leadPassengerName?: string
	supplierCode?: string
	trackingId?: string
}
