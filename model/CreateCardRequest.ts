import { BookingInfo } from "./BookingInfo"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

/**
 * Creates a virtual card.
 */
export interface CreateCardRequest {
	cardType: CardTypeSpecification
	bookingInfo?: BookingInfo
	providerAccountId?: string
	providerCode: ProviderCode
	balance: number
	currency: string
	fundingDate?: string
	expiryDate?: any
	usage?: "SINGLE_USE" | "MULTIPLE_USE"
	friendlyName?: string
}
