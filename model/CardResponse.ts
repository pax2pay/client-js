import { AccountResponse } from "./AccountResponse"
import { BookingInfo } from "./BookingInfo"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

export interface CardResponse {
	cardType?: CardTypeSpecification
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
	usage?: "SINGLE_USE" | "MULTIPLE_USE"
	state?: "ACTIVE" | "INACTIVE" | "CLOSED" | "DELETED" | "EXPIRED" | "PENDING" | "APPROVED" | "DECLINED" | "GENERATED"
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
	bookingInfo?: BookingInfo
}
