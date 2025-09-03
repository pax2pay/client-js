import { AccountResponse } from "./AccountResponse"
import { BookingInfo } from "./BookingInfo"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
import { CardForm } from "./CardForm"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardState } from "./CardState"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { InvokingSystem } from "./InvokingSystem"
import { ProviderCode } from "./ProviderCode"
import { Usage } from "./Usage"

export interface CardResponse {
	cardType?: CardTypeSpecification | string
	useAs?: string
	nameOnCard?: string
	cardNumber?: string
	cvv?: string
	issueDate?: string
	expiryDate?: string
	cardForm?: CardForm
	fundingDate?: string
	fundingBalance?: number
	balance?: number
	remainingBalance?: number
	notes?: string
	usage?: Usage
	state?: CardState
	providerCode?: ProviderCode
	providerCardId?: string
	cardAccount?: AccountResponse
	fundingAccount?: AccountResponse
	creatingSystem?: InvokingSystem
	createdBy?: string
	bookingInfo?: BookingInfo | BookingInfoResponse
	schedule?: CardScheduleResponseItem[]
	delivery?: CardDeliveryResponse
	batchId?: string
}

export namespace CardResponse {
	export function is(value: CardResponse | any): value is CardResponse {
		return (
			typeof value == "object" &&
			(value.cardType == undefined || CardTypeSpecification.is(value.cardType) || typeof value.cardType == "string") &&
			(value.useAs == undefined || typeof value.useAs == "string") &&
			(value.nameOnCard == undefined || typeof value.nameOnCard == "string") &&
			(value.cardNumber == undefined || typeof value.cardNumber == "string") &&
			(value.cvv == undefined || typeof value.cvv == "string") &&
			(value.issueDate == undefined || typeof value.issueDate == "string") &&
			(value.expiryDate == undefined || typeof value.expiryDate == "string") &&
			(value.cardForm == undefined || CardForm.is(value.cardForm)) &&
			(value.fundingDate == undefined || typeof value.fundingDate == "string") &&
			(value.fundingBalance == undefined || typeof value.fundingBalance == "number") &&
			(value.balance == undefined || typeof value.balance == "number") &&
			(value.remainingBalance == undefined || typeof value.remainingBalance == "number") &&
			(value.notes == undefined || typeof value.notes == "string") &&
			(value.usage == undefined || Usage.is(value.usage)) &&
			(value.state == undefined || CardState.is(value.state)) &&
			(value.providerCode == undefined || ProviderCode.is(value.providerCode)) &&
			(value.providerCardId == undefined || typeof value.providerCardId == "string") &&
			(value.cardAccount == undefined || AccountResponse.is(value.cardAccount)) &&
			(value.fundingAccount == undefined || AccountResponse.is(value.fundingAccount)) &&
			(value.creatingSystem == undefined || InvokingSystem.is(value.creatingSystem)) &&
			(value.createdBy == undefined || typeof value.createdBy == "string") &&
			(value.bookingInfo == undefined ||
				BookingInfo.is(value.bookingInfo) ||
				BookingInfoResponse.is(value.bookingInfo)) &&
			(value.schedule == undefined ||
				(Array.isArray(value.schedule) && value.schedule.every((item: any) => CardScheduleResponseItem.is(item)))) &&
			(value.delivery == undefined || CardDeliveryResponse.is(value.delivery)) &&
			(value.batchId == undefined || typeof value.batchId == "string")
		)
	}
}
