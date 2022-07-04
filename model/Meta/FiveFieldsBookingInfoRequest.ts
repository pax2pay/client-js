import * as isoly from "isoly"
export interface FiveFieldsBookingInfoRequest {
	agentBookingReference?: string
	departureDate?: isoly.Date
	supplierBookingReference?: string
	leadPassengerName?: string
	supplierCode?: string
}
