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
			(value.agentBookingReference == undefined ||
				(typeof value.agentBookingReference == "string" && value.agentBookingReference.length <= 500)) &&
			(value.departureDate == undefined || typeof value.departureDate == "string") &&
			(value.supplierBookingReference == undefined ||
				(typeof value.supplierBookingReference == "string" && value.supplierBookingReference.length <= 256)) &&
			(value.leadPassengerName == undefined ||
				(typeof value.leadPassengerName == "string" && value.leadPassengerName.length <= 45)) &&
			(value.supplierCode == undefined || (typeof value.supplierCode == "string" && value.supplierCode.length <= 45))
		)
	}
}
