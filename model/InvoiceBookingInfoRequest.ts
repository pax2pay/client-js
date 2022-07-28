import * as isoly from "isoly"

export interface InvoiceBookingInfoRequest {
	supplierName?: string
	date?: isoly.Date
	supplierReferenceNumber?: string
	value?: number
	taxElement?: string
}

export namespace InvoiceBookingInfoRequest {
	export function is(value: InvoiceBookingInfoRequest | any): value is InvoiceBookingInfoRequest {
		return (
			typeof value == "object" &&
			(value.supplierName == undefined || typeof value.supplierName == "string") &&
			(value.date == undefined || isoly.Date.is(value.date)) &&
			(value.supplierReferenceNumber == undefined || typeof value.supplierReferenceNumber == "string") &&
			(value.value == undefined || typeof value.value == "number") &&
			(value.taxElement == undefined || typeof value.taxElement == "string")
		)
	}
}
