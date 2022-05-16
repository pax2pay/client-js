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
