import { Currency } from "isoly"
import { AccountState } from "./AccountState"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { FundingAccountResponseV2 } from "./FundingAccountResponseV2"
import { ProviderCode } from "./ProviderCode"
import { YearMonth } from "./YearMonth"

export interface CardResponseV2 {
	cardType: CardTypeSpecification | string
	cardNumber: string
	cvv: string
	expiryDate: YearMonth
	nameOnCard: string
	fundingBalance: number
	fundingDate: string
	balance: number
	currency: Currency
	issueDate: string
	providerCode: ProviderCode
	providerCardId: string
	usage: CardUsage
	fundingAccount: FundingAccountResponseV2
	createdBy: string
	state: AccountState
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
			typeof value.cvv == "string" &&
			YearMonth.is(value.expiryDate) &&
			typeof value.nameOnCard == "string" &&
			typeof value.balance == "number" &&
			typeof value.issueDate == "string" &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerCardId == "string" &&
			CardUsage.is(value.usage) &&
			FundingAccountResponseV2.is(value.fundingAccount) &&
			(value.schedule == undefined ||
				(Array.isArray(value.schedule) &&
					value.schedule.every((a: any) => {
						return CardScheduleResponseItem.is(a)
					}))) &&
			typeof value.createdBy == "string" &&
			CardDeliveryResponse.is(value.delivery) &&
			(value.batchId == undefined || typeof value.batchId == "string") &&
			(value.bookingInfo == undefined || BookingInfoResponse.is(value.bookingInfo))
		)
	}
}
