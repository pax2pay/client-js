import { Date } from "isoly"
import { isly } from "isly"
import { CardOperation } from "./CardOperation"
import { PaymentAccountState } from "./PaymentAccountState"
import { PaymentCardUsage } from "./PaymentCardUsage"
import { ProviderCode } from "./ProviderCode"
import { YearMonth } from "./YearMonth"

export interface CardResponseV3 {
	id: string
	providerCode: ProviderCode
	providerCardId: string
	cardType: string
	expires: YearMonth
	usage: PaymentCardUsage
	state: PaymentAccountState
	token?: string
	pan: string
	cvv?: string
	cardHolderName: string
	issued?: Date
	remaining: number
	maxAmount: number
	operations?: CardOperation
}

export namespace CardResponseV3 {
	export const type = isly.object<CardResponseV3>({
		id: isly.string(),
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		providerCardId: isly.string(),
		cardType: isly.string(),
		expires: isly.fromIs("YearMonth", YearMonth.is),
		usage: isly.fromIs("PaymentCardUsage", PaymentCardUsage.is),
		state: isly.fromIs("PaymentAccountState", PaymentAccountState.is),
		token: isly.string().optional(),
		pan: isly.string(),
		cvv: isly.string().optional(),
		cardHolderName: isly.string(),
		issued: isly.fromIs("Date", Date.is).optional(),
		remaining: isly.number(),
		maxAmount: isly.number(),
		operations: isly.fromIs("CardOperation", CardOperation.is).optional(),
	})
	export const is = type.is
}
