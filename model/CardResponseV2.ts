import { Currency, Date } from "isoly"
import { isly } from "isly"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardState } from "./CardState"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { FundingAccountSummaryResponse } from "./FundingAccountSummaryResponse"
import { MerchantResponse } from "./MerchantResponse"
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
	cardId: string
	usage: CardUsage
	fundingAccount: FundingAccountSummaryResponse
	createdBy: string
	state: CardState
	longTermTokenExpiry?: Date
	activationDate?: Date
	schedule?: CardScheduleResponseItem[]
	bookingInfo?: BookingInfoResponse
	delivery?: CardDeliveryResponse
	batchId?: string
	merchantRestriction?: MerchantResponse
}

export namespace CardResponseV2 {
	export const type = isly.object<CardResponseV2>({
		cardType: isly.union(CardTypeSpecification.type, isly.string()),
		cardNumber: isly.string(),
		cvv: isly.string().optional(),
		expiryDate: isly.fromIs("YearMonth", YearMonth.is),
		nameOnCard: isly.string().optional(),
		fundingBalance: isly.number(),
		remainingBalance: isly.number(),
		fundingDate: isly.string(),
		balance: isly.number(),
		currency: isly.fromIs("Currency", Currency.is),
		issueDate: isly.string(),
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		providerCardId: isly.string(),
		cardId: isly.string(),
		usage: isly.fromIs("CardUsage", CardUsage.is),
		fundingAccount: isly.fromIs("FundingAccountSummaryResponse", FundingAccountSummaryResponse.is),
		createdBy: isly.string(),
		state: CardState.type,
		longTermTokenExpiry: isly.fromIs("Date", Date.is).optional(),
		activationDate: isly.fromIs("Date", Date.is).optional(),
		schedule: isly.array(isly.fromIs("CardScheduleResponseItem", CardScheduleResponseItem.is)).optional(),
		bookingInfo: isly.fromIs("BookingInfoResponse", BookingInfoResponse.is).optional(),
		delivery: isly.fromIs("CardDeliveryResponse", CardDeliveryResponse.is).optional(),
		batchId: isly.string().optional(),
		merchantRestriction: isly.fromIs("MerchantResponse", MerchantResponse.is).optional(),
	})
	export const is = type.is
}
