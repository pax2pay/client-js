import { Currency, Date } from "isoly"
import { AccountState } from "./AccountState"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { FundingAccountSummaryResponse } from "./FundingAccountSummaryResponse"
import { ProviderCode } from "./ProviderCode"
import { YearMonth } from "./YearMonth"

export interface CardResponseV2 {
	cardType: CardTypeSpecification | string
	cardNumber: string
	cvv?: string
	expiryDate: YearMonth
	nameOnCard?: string
	fundingBalance: number
	remainingBalance: number
	fundingDate: string
	balance: number
	currency: Currency
	issueDate: string
	providerCode: ProviderCode
	providerCardId: string
	usage: CardUsage
	fundingAccount: FundingAccountSummaryResponse
	createdBy: string
	state: AccountState
	longTermTokenExpiry?: Date
	activationDate?: Date
	schedule?: CardScheduleResponseItem[]
	bookingInfo?: BookingInfoResponse
	delivery?: CardDeliveryResponse
	batchId?: string
}

export namespace CardResponseV2 {
	export function is(value: CardResponseV2 | any): value is CardResponseV2 {
		return (
			typeof value == "object" &&
			(typeof value.cardType == "string" || CardTypeSpecification.is(value.cardType)) &&
			typeof value.cardNumber == "string" &&
			(value.cvv == undefined || typeof value.cvv == "string") &&
			YearMonth.is(value.expiryDate) &&
			(value.nameOnCard == undefined || typeof value.nameOnCard == "string") &&
			typeof value.fundingBalance == "number" &&
			typeof value.remainingBalance == "number" &&
			typeof value.balance == "number" &&
			Date.is(value.issueDate) &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerCardId == "string" &&
			CardUsage.is(value.usage) &&
			FundingAccountSummaryResponse.is(value.fundingAccount) &&
			(value.schedule == undefined ||
				(Array.isArray(value.schedule) &&
					value.schedule.every((a: any) => {
						return CardScheduleResponseItem.is(a)
					}))) &&
			typeof value.createdBy == "string" &&
			AccountState.is(value.state) &&
			(value.delivery == undefined || CardDeliveryResponse.is(value.delivery)) &&
			(value.batchId == undefined || typeof value.batchId == "string") &&
			(value.bookingInfo == undefined || BookingInfoResponse.is(value.bookingInfo)) &&
			(value.longTermTokenExpiry == undefined || Date.is(value.longTermTokenExpiry)) &&
			(value.activationDate == undefined || Date.is(value.activationDate))
		)
	}
}
