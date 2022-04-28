export interface HotelBookingInfoResponse {
	type: "HOTEL"
	bookingInfoIdentifier?: string
	trackingId?: string
	passengers?: {
		leadPassengerName: string
	}
	hotel?: {
		checkIn: string
	}
	references?: {
		supplierCode?: string
		supplierBookingReference?: string
		agentBookingReference?: string
	}
	cost?: number
	currency?: string
	timestamp: string
}
