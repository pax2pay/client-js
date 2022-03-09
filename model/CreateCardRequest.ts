import { BookingInfoRequest } from "./BookingInfoRequest"
import { CardDeliveryRequest } from "./CardDeliveryRequest"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"
import { CardAmendmentScheduledTaskRequest, CardStateChangeScheduledTaskRequest } from "./ScheduledTaskRequest"

/**
 * Creates a virtual card.
 */
export interface CreateCardRequest {
	cardType: CardTypeSpecification | string
	bookingInfo?: BookingInfoRequest
	providerAccountId?: string
	providerCode: ProviderCode
	balance: number
	currency: string
	fundingDate?: string
	expiryDate?: any
	usage?: "SINGLE_USE" | "MULTIPLE_USE"
	schedule?: (CardAmendmentScheduledTaskRequest | CardStateChangeScheduledTaskRequest)[]
	friendlyName?: string
	delivery?: CardDeliveryRequest
}
