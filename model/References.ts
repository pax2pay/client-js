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
			(typeof value.supplierBookingReference == "string" || value.supplierBookingReference == undefined) &&
			(typeof value.agentBookingReference == "string" || value.agentBookingReference == undefined) &&
			(typeof value.supplierCode == "string" || value.supplierCode == undefined) &&
			(typeof value.supplierName == "string" || value.supplierName == undefined) &&
			(typeof value.fabBasketReference == "string" || value.fabBasketReference == undefined) &&
			(typeof value.syndicatorName == "string" || value.syndicatorName == undefined)
		)
	}
}
