import * as isoly from "isoly"

export interface Invoice {
	type?: "invoice"
	date?: isoly.Date
	supplierName?: string
	supplierReferenceNumber?: string
	value?: number
	taxElement?: string
}

export namespace Invoice {
	export function is(value: Invoice | any): value is Invoice {
		return (
			typeof value == "object" &&
			(typeof value.supplierName == "string" || value.supplierName == undefined) &&
			(typeof value.taxElement == "string" || value.taxElement == undefined) &&
			(isoly.Date.is(value.date) || value.date == undefined) &&
			(typeof value.value == "number" || value.value == undefined) &&
			(typeof value.supplierReferenceNumber == "string" || value.supplierReferenceNumber == undefined) &&
			value.type == "invoice"
		)
	}
}
