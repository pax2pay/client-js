import { AgentBookingInfo } from "./AgentBookingInfo"
import { BookedProductInfo } from "./BookedProductInfo"
import { SupplierBookingInfo } from "./SupplierBookingInfo"
import { TravelPartyInfo } from "./TravelPartyInfo"

export interface LegacyBookingInfoRequest {
	bookingOpType?: string
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
export namespace LegacyBookingInfoRequest {
	export function is(value: LegacyBookingInfoRequest | any): value is LegacyBookingInfoRequest {
		return (
			typeof value == "object" &&
			(value.bookingOpType == undefined || typeof value.bookingOpType == "string") &&
			(value.productType == undefined || typeof value.productType == "string") &&
			(value.trackingId == undefined || typeof value.trackingId == "string") &&
			(value.bookingInfoText == undefined || typeof value.bookingInfoText == "string") &&
			(value.bookingDate == undefined || typeof value.bookingDate == "string") &&
			(value.supplierBookingInfo == undefined || SupplierBookingInfo.is(value.supplierBookingInfo)) &&
			(value.createdOn == undefined || typeof value.createdOn == "string") &&
			(value.createdBy == undefined || typeof value.createdBy == "string") &&
			(value.bookingRef == undefined || typeof value.bookingRef == "string") &&
			(value.sellingPriceAmount == undefined || typeof value.sellingPriceAmount == "number") &&
			(value.sellingPriceCurrency == undefined || typeof value.sellingPriceCurrency == "string") &&
			(value.bookedProduct == undefined || BookedProductInfo.is(value.BookedProductInfo)) &&
			(value.travelParty == undefined || TravelPartyInfo.is(value.travelParty)) &&
			(value.agentBookingInfo == undefined || AgentBookingInfo.is(value.agentBookingInfo)) &&
			(value.chargingMerchantId == undefined || typeof value.chargingMerchantId == "string")
		)
	}
}
