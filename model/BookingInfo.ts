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
