import * as isoly from "isoly"
import { AccountResponse } from "../Account/AccountResponse"
import { AccountState } from "../Account/AccountState"
import { BookingInfo } from "../Meta/BookingInfo"
import { BookingInfoResponse } from "../Meta/BookingInfoResponse"
import { ProviderCode } from "../Provider/ProviderCode"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"

export interface CardResponse {
	cardType?: CardTypeSpecification | string
	useAs?: string
	nameOnCard?: string
	cardNumber?: string
	cvv?: string
	issueDate?: isoly.Date
	expiryDate?: isoly.Date
	cardForm?: "GENERATABLE" | "PHYSICAL" | "VIRTUAL"
	fundingDate?: isoly.Date
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
