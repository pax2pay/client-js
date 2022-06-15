import * as isoly from "isoly"

export interface InvoiceBookingInfoRequest {
	supplierName?: string
	date?: isoly.Date
	supplierReferenceNumber?: string
	value?: number
	taxElement?: string
}
