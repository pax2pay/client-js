import * as isoly from "isoly"

export interface HotelBookingInfoRequest {
	leadPassengerName?: string
	checkIn?: isoly.Date
	supplierBookingReference?: string
	agentBookingReference?: string
}
