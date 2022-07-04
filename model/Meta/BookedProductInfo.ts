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
