import { Currency, Date } from "isoly"
import { BookingInfoRequest } from "./BookingInfoRequest"
import { CardAmendmentScheduledTaskRequest } from "./CardAmendmentScheduledTaskRequest"
import { CardDeliveryRequest } from "./CardDeliveryRequest"
import { CardStateChangeScheduledTaskRequest } from "./CardStateChangeScheduledTaskRequest"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { MetadataRequest } from "./MetadataRequest"
import { ProviderCode } from "./ProviderCode"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"
import { Usage } from "./Usage"
import { YearMonth } from "./YearMonth"

/**
 * Creates a virtual card.
 */
export interface CreateCardRequest {
	cardType: CardTypeSpecification | string
	bookingInfo?: MetadataRequest
	providerAccountId?: string
	providerCode: ProviderCode
	balance: number
	currency: Currency
	fundingDate?: Date
	expiryDate?: YearMonth
	usage?: Usage
	schedule?: (CardAmendmentScheduledTaskRequest | CardStateChangeScheduledTaskRequest | ScheduledTaskRequest)[]
	friendlyName?: string
	delivery?: CardDeliveryRequest
	state?: string
	batchId?: string
	merchantRestrictionId?: string
	closeDate?: Date
}
