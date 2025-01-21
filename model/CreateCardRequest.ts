import { BookingInfoRequest } from "./BookingInfoRequest"
import { CardAmendmentScheduledTaskRequest } from "./CardAmendmentScheduledTaskRequest"
import { CardDeliveryRequest } from "./CardDeliveryRequest"
import { CardStateChangeScheduledTaskRequest } from "./CardStateChangeScheduledTaskRequest"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"
import { Usage } from "./Usage"

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
	usage?: Usage
	schedule?: (CardAmendmentScheduledTaskRequest | CardStateChangeScheduledTaskRequest | ScheduledTaskRequest)[]
	friendlyName?: string
	delivery?: CardDeliveryRequest
	state?: string
	batchId?: string
	merchantRestrictionId?: string
}
