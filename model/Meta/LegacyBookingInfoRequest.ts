import * as isoly from "isoly"
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
	sellingPriceCurrency?: isoly.Currency
	sellingPriceAmount?: number
	bookedProduct?: BookedProductInfo
	travelParty?: TravelPartyInfo
	agentBookingInfo?: AgentBookingInfo
	chargingMerchantId?: string
}
