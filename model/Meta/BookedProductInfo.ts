import * as isoly from "isoly"
/**
 * Information about the flight
 */
export interface BookedProductInfo {
	bookedProductStartTime?: isoly.Date
	bookedProductEndTime?: isoly.Date
	bookedProductStartLoc?: string
	bookedProductEndLoc?: string
	bookedProductMerchantCode?: string
}

export namespace BookedProductInfo {
	export function is(value: BookedProductInfo | any) {
		return (
			typeof value == "object" &&
			(value.bookedProductStartTime == undefined || isoly.Date.is(value.bookedProductStartTime)) &&
			(value.bookedProductEndTime == undefined || isoly.Date.is(value.bookedProductEndTime)) &&
			(value.bookedProductStartLoc == undefined || typeof value.bookedProductStartLoc == "string") &&
			(value.bookedProductEndLoc == undefined || typeof value.bookedProductEndLoc == "string") &&
			(value.bookedProductMerchantCode == undefined || typeof value.bookedProductMerchantCode == "string")
		)
	}
}
