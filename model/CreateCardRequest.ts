import { BookingInfoRequest } from "./BookingInfoRequest"
import { CardAmendmentScheduledTaskRequest } from "./CardAmendmentScheduledTaskRequest"
import { CardDeliveryRequest } from "./CardDeliveryRequest"
import { CardStateChangeScheduledTaskRequest } from "./CardStateChangeScheduledTaskRequest"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { ProviderCode } from "./ProviderCode"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"

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
	usage?: CardUsage
	schedule?: (CardAmendmentScheduledTaskRequest | CardStateChangeScheduledTaskRequest | ScheduledTaskRequest)[]
	friendlyName?: string
	delivery?: CardDeliveryRequest
	state?: string
	batchId?: string
	merchantRestrictionId?: string
}
