import * as isoly from "isoly"
export interface FiveFieldsBookingInfoRequest {
	agentBookingReference?: string
	departureDate?: isoly.Date
	supplierBookingReference?: string
	leadPassengerName?: string
	supplierCode?: string
}

export namespace FiveFieldsBookingInfoRequest {
	export function is(value: FiveFieldsBookingInfoRequest | any): value is FiveFieldsBookingInfoRequest {
		return (
			typeof value == "object" &&
			(value.agentBookingReference == undefined || typeof value.agentBookingReference == "string") &&
			(value.departureDate == undefined || isoly.Date.is(value.departure)) &&
			(value.supplierBookingReference == undefined || typeof value.supplierBookingReference == "string") &&
			(value.leadPassengerName == undefined || typeof value.leadPassengerName == "string") &&
			(value.supplierCode == undefined || typeof value.supplierCode == "string")
		)
	}
}
