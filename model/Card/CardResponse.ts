import * as isoly from "isoly"
import { AccountResponse } from "../Account/AccountResponse"
import { AccountState } from "../Account/AccountState"
import { BookingInfo } from "../Meta/BookingInfo"
import { BookingInfoResponse } from "../Meta/BookingInfoResponse"
import { ProviderCode } from "../Provider/ProviderCode"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
import { CardForm } from "./CardForm"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { CreatingSystem } from "./CreatingSystem"

export interface CardResponse {
	cardType: CardTypeSpecification | string
	useAs?: string
	nameOnCard: string
	cardNumber: string
	cvv: string
	issueDate?: isoly.Date
	expiryDate: isoly.Date
	cardForm: CardForm
	fundingDate?: isoly.Date
	fundingBalance?: number
	balance?: number
	remainingBalance?: number
	notes?: string
	usage: CardUsage
	state?: AccountState
	providerCode: ProviderCode
	providerCardId: string
	cardAccount?: AccountResponse
	fundingAccount?: AccountResponse
	creatingSystem?: CreatingSystem
	createdBy?: string
	bookingInfo?: BookingInfo | BookingInfoResponse
	schedule?: CardScheduleResponseItem[]
	delivery?: CardDeliveryResponse
}

export namespace CardResponse {
	export function is(value: CardResponse | any): value is CardResponse {
		return (
			typeof value == "object" &&
			(CardTypeSpecification.is(value.cardType) || typeof value.cardType == "string") &&
			(value.useAs == undefined || typeof value.useAs == "string") &&
			typeof value.nameOnCard == "string" &&
			typeof value.cardNumber == "string" &&
			typeof value.cvv == "string" &&
			(value.issueDate == undefined || isoly.Date.is(value.issueDate)) &&
			isoly.Date.is(value.expiryDate) &&
			CardForm.is(value.cardForm) &&
			(value.fundingDate == undefined || isoly.Date.is(value.fundingDate)) &&
			(value.fundingBalance == undefined || typeof value.fundingBalance == "number") &&
			(value.balance == undefined || typeof value.balance == "number") &&
			(value.remainingBalance == undefined || typeof value.remainingBalance == "number") &&
			(value.notes == undefined || typeof value.notes == "string") &&
			CardUsage.is(value.usage) &&
			(value.state == undefined || AccountState.is(value.state)) &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerCardId == "string" &&
			(value.cardAccount == undefined || AccountResponse.is(value.cardAccount)) &&
			(value.fundingAccount == undefined || AccountResponse.is(value.fundingAccount)) &&
			(value.creatingSystem == undefined || CreatingSystem.is(value.creatingSystem)) &&
			(value.createdBy == undefined || typeof value.createdBy == "string") &&
			(value.bookingInfo == undefined ||
				BookingInfo.is(value.bookingInfo) ||
				BookingInfoResponse.is(value.bookingInfo)) &&
			(value.schedule == undefined ||
				(Array.isArray(value.schedule) && value.schedule.every((item: any) => CardScheduleResponseItem.is(item)))) &&
			(value.delivery == undefined || CardDeliveryResponse.is(value.delivery))
		)
	}
}
