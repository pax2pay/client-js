import { AccountResponse } from "./AccountResponse"
import { AccountState } from "./AccountState"
import { BookingInfo } from "./BookingInfo"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { ProviderCode } from "./ProviderCode"

export interface CardResponse {
	cardType?: CardTypeSpecification | string
	useAs?: string
	nameOnCard?: string
	cardNumber?: string
	cvv?: string
	issueDate?: string
	expiryDate?: string
	cardForm?: "GENERATABLE" | "PHYSICAL" | "VIRTUAL"
	fundingDate?: string
	fundingBalance?: number
	balance?: number
	remainingBalance?: number
	notes?: string
	usage?: CardUsage
	state?: AccountState
	providerCode?: ProviderCode
	providerCardId?: string
	cardAccount?: AccountResponse
	fundingAccount?: AccountResponse
	creatingSystem?:
		| "PORTAL"
		| "REST_API"
		| "FAB"
		| "REST_API_PORTAL"
		| "REST_API_EXTERNAL"
		| "SOAP_API_FAB"
		| "SOAP_API_EXTERNAL"
		| "CRON"
		| "UNKNOWN"
		| "UNDEFINED"
	createdBy?: string
	bookingInfo?: BookingInfo | BookingInfoResponse
	schedule?: CardScheduleResponseItem[]
	delivery?: CardDeliveryResponse
}
