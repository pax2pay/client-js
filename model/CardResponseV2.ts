import { Currency, Date } from "isoly"
import { isly } from "isly"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardState } from "./CardState"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { FundingAccountSummaryResponse } from "./FundingAccountSummaryResponse"
import { MerchantResponse } from "./MerchantResponse"
import { MetadataResponse } from "./MetadataResponse"
import { ProviderCode } from "./ProviderCode"
import { Usage } from "./Usage"
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
	usage: Usage
	usagesRemaining?: number
	fundingAccount: FundingAccountSummaryResponse
	createdBy: string
	state: CardState
	longTermTokenExpiry?: Date
	activationDate?: Date
	schedule?: CardScheduleResponseItem[]
	bookingInfo?: MetadataResponse
	delivery?: CardDeliveryResponse
	batchId?: string
	merchantRestriction?: MerchantResponse
	closeDate?: Date
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
		providerCode: ProviderCode.type,
		providerCardId: isly.string(),
		cardId: isly.string(),
		usage: Usage.type,
		usagesRemaining: isly.number().optional(),
		fundingAccount: FundingAccountSummaryResponse.type,
		createdBy: isly.string(),
		state: CardState.type,
		longTermTokenExpiry: isly.fromIs("Date", Date.is).optional(),
		activationDate: isly.fromIs("Date", Date.is).optional(),
		schedule: isly.array(isly.fromIs("CardScheduleResponseItem", CardScheduleResponseItem.is)).optional(),
		bookingInfo: MetadataResponse.type.optional(),
		delivery: CardDeliveryResponse.type.optional(),
		batchId: isly.string().optional(),
		merchantRestriction: MerchantResponse.type.optional(),
		closeDate: isly.fromIs("Date", Date.is).optional(),
	})
	export const is = type.is
}
