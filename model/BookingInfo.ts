import { AgentBookingInfo } from "./AgentBookingInfo"
import { BookedProductInfo } from "./BookedProductInfo"
import { SupplierBookingInfo } from "./SupplierBookingInfo"
import { TravelPartyInfo } from "./TravelPartyInfo"

/**
 * Optional way to save data as to what the card is expected to be used for
 */
export interface BookingInfo {
	bookingOpType: string
	productType?: string
	trackingId?: string
	bookingInfoText?: string
	bookingDate?: string
	supplierBookingInfo?: SupplierBookingInfo
	createdOn?: string
	createdBy?: string
	bookingRef?: string
	sellingPriceCurrency?: string
	sellingPriceAmount?: number
	bookedProduct?: BookedProductInfo
	travelParty?: TravelPartyInfo
	agentBookingInfo?: AgentBookingInfo
	chargingMerchantId?: string
}

export namespace BookingInfo {
	export function is(value: BookingInfo | any): value is BookingInfo {
		return (
			typeof value == "object" &&
			typeof value.bookingOpType == "string" &&
			(value.productType == undefined || typeof value.productType == "string") &&
			(value.trackingId == undefined || typeof value.trackingId == "string") &&
			(value.bookingInfoText == undefined || typeof value.bookingInfoText == "string") &&
			(value.bookingDate == undefined || typeof value.bookingDate == "string") &&
			(value.supplierBookingInfo == undefined || SupplierBookingInfo.is(value.supplierBookingInfo)) &&
			(value.createdOn == undefined || typeof value.createdOn == "string") &&
			(value.createdBy == undefined || typeof value.createdBy == "string") &&
			(value.bookingRef == undefined || typeof value.bookingRef == "string") &&
			(value.sellingPriceCurrency == undefined || typeof value.sellingPriceCurrency == "string") &&
			(value.sellingPriceAmount == undefined || typeof value.sellingPriceAmount == "number") &&
			(value.bookedProduct == undefined || BookedProductInfo.is(value.bookedProduct)) &&
			(value.travelParty == undefined || TravelPartyInfo.is(value.travelParty)) &&
			(value.agentBookingInfo == undefined || AgentBookingInfo.is(value.agentBookingInfo)) &&
			(value.chargingMerchantId == undefined || typeof value.chargingMerchantId == "string")
		)
	}
}
