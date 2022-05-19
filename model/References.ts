export interface References {
	supplierCode?: string
	supplierName?: string
	supplierBookingReference?: string
	agentBookingReference?: string
	fabBasketReference?: string
	syndicatorName?: string
}
export namespace References {
	export function is(value: References | any): value is References {
		return (
			typeof value == "object" &&
			typeof value.supplierCode == "string" &&
			(typeof value.supplierBookingReference == "string" || value.supplierBookingReference == undefined) &&
			typeof value.agentBookingReference == "string"
		)
	}
}
