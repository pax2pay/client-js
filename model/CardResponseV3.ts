import { Date } from "isoly"
import { isly } from "isly"
import { AccountState } from "./AccountState"
import { CardOperation } from "./CardOperation"
import { CardUsage } from "./CardUsage"
import { YearMonth } from "./YearMonth"

export interface CardResponseV3 {
	id: string
	cardType: string
	expires: YearMonth
	usage: CardUsage
	state: AccountState
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
		cardType: isly.string(),
		expires: isly.fromIs("YearMonth", YearMonth.is),
		usage: isly.fromIs("CardUsage", CardUsage.is),
		state: isly.fromIs("AccountState", AccountState.is),
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
