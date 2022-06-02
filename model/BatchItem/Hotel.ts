import * as isoly from "isoly"

export interface Hotel {
	type?: "hotel"
	leadPassengerName: string
	checkIn: isoly.Date
	supplierBookingReference?: string
	agentBookingReference: string
	supplierCode: string
}

export namespace Hotel {
	export function is(value: Hotel | any): value is Hotel {
		return (
			typeof value == "object" &&
			typeof value.leadPassengerName == "string" &&
			typeof value.agentBookingReference == "string" &&
			isoly.Date.is(value.checkIn) &&
			(typeof value.supplierBookingReference == "string" || value.supplierBookingReference == undefined) &&
			(value.type == "hotel" || value.type == undefined) &&
			value.agentBookingReference != "" &&
			value.leadPassengerName != ""
		)
	}
}
