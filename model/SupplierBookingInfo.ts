/**
 * Booking info related to the supplier
 */
export interface SupplierBookingInfo {
	supplierBookingRef?: string
	supplierCode?: string
}

export namespace SupplierBookingInfo {
	export function is(value: SupplierBookingInfo | any): value is SupplierBookingInfo {
		return (
			typeof value == "object" &&
			(value.supplierBookingRef == undefined || typeof value.supplierBookingRef == "string") &&
			(value.supplierCode == undefined || typeof value.supplierCode == "string")
		)
	}
}
