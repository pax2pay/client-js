import * as isoly from "isoly"

export interface InvoiceBookingInfoResponse {
	type: "INVOICE"
	bookingInfoIdentifier?: string
	trackingId?: string
	supplierName?: string
	date?: isoly.Date
	supplierReferenceNumber?: string
	value?: number
	taxElement?: string
	timestamp: isoly.DateTime
}

export namespace InvoiceBookingInfoResponse {
	export function is(value: InvoiceBookingInfoResponse | any): value is InvoiceBookingInfoResponse {
		return (
			typeof value == "object" &&
			value.type == "INVOICE" &&
			(value.bookingInfoIdentifier == undefined || typeof value.bookingInfoIdentifier == "string") &&
			(value.trackingId == undefined || typeof value.trackingId == "string") &&
			(value.supplierName == undefined || typeof value.supplierName == "string") &&
			(value.date == undefined || isoly.Date.is(value.date)) &&
			(value.supplierReferenceNumber == undefined || typeof value.supplierReferenceNumber == "string") &&
			(value.value == undefined || typeof value.value == "number") &&
			(value.taxElement == undefined || typeof value.taxElement == "string") &&
			isoly.DateTime.is(value.timestamp)
		)
	}
}
