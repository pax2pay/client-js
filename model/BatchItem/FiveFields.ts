import * as isoly from "isoly"

export interface FiveFields {
	type?: "five-fields"
	departureDate: isoly.Date
	leadPassengerName: string
	supplierBookingReference?: string
	agentBookingReference: string
	supplierCode: string
}

export namespace FiveFields {
	export function is(value: FiveFields | any): value is FiveFields {
		return (
			typeof value == "object" &&
			typeof value.leadPassengerName == "string" &&
			typeof value.supplierCode == "string" &&
			typeof value.agentBookingReference == "string" &&
			(typeof value.supplierBookingReference == "string" || value.supplierBookingReference == undefined) &&
			isoly.Date.is(value.departureDate) &&
			(value.type == "five-fields" || value.type == undefined) &&
			value.agentBookingReference != "" &&
			value.supplierCode != "" &&
			value.leadPassengerName != ""
		)
	}
}
