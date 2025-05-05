import { Currency, Date } from "isoly"
import { isly } from "isly"
import { AccountState } from "./AccountState"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
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
	fundingAccount: FundingAccountSummaryResponse
	createdBy: string
	state: AccountState
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
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		providerCardId: isly.string(),
		cardId: isly.string(),
		usage: Usage.type,
		fundingAccount: isly.fromIs("FundingAccountSummaryResponse", FundingAccountSummaryResponse.is),
		createdBy: isly.string(),
		state: isly.fromIs("AccountState", AccountState.is),
		longTermTokenExpiry: isly.fromIs("Date", Date.is).optional(),
		activationDate: isly.fromIs("Date", Date.is).optional(),
		schedule: isly.array(isly.fromIs("CardScheduleResponseItem", CardScheduleResponseItem.is)).optional(),
		bookingInfo: isly.fromIs("MetadataResponse", MetadataResponse.is).optional(),
		delivery: isly.fromIs("CardDeliveryResponse", CardDeliveryResponse.is).optional(),
		batchId: isly.string().optional(),
		merchantRestriction: isly.fromIs("MerchantResponse", MerchantResponse.is).optional(),
		closeDate: isly.fromIs("Date", Date.is).optional(),
	})
	export const is = type.is
}
