/**
 * Information about the flight
 */
export interface BookedProductInfo {
	bookedProductStartTime?: string
	bookedProductEndTime?: string
	bookedProductStartLoc?: string
	bookedProductEndLoc?: string
	bookedProductMerchantCode?: string
}

export namespace BookedProductInfo {
	export function is(value: BookedProductInfo | any): value is BookedProductInfo {
		return (
			typeof value == "object" &&
			(value.bookedProductStartTime == undefined || typeof value.bookedProductStartTime == "string") &&
			(value.bookedProductEndTime == undefined || typeof value.bookedProductEndTime == "string") &&
			(value.bookedProductStartLoc == undefined || typeof value.bookedProductStartLoc == "string") &&
			(value.bookedProductEndLoc == undefined || typeof value.bookedProductEndLoc == "string") &&
			(value.bookedProductMerchantCode == undefined || typeof value.bookedProductMerchantCode == "string")
		)
	}
}
