export interface FiveFieldsBookingInfoRequest {
	agentBookingReference?: string
	departureDate?: string
	supplierBookingReference?: string
	leadPassengerName?: string
	supplierCode?: string
}

export namespace FiveFieldsBookingInfoRequest {
	export function is(value: FiveFieldsBookingInfoRequest | any): value is FiveFieldsBookingInfoRequest {
		return (
			typeof value == "object" &&
			(value.agentBookingReference == undefined || typeof value.agentBookingReference == "string") &&
			(value.departureDate == undefined || typeof value.departureDate == "string") &&
			(value.supplierBookingReference == undefined || typeof value.supplierBookingReference == "string") &&
			(value.leadPassengerName == undefined || typeof value.leadPassengerName == "string") &&
			(value.supplierCode == undefined || typeof value.supplierCode == "string")
		)
	}
}
