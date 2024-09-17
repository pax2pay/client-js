import { Date } from "isoly"
import { isly } from "isly"
import { CardUsage } from "./CardUsage"
import { SummaryCardResponseV3 } from "./SummaryCardResponseV3"
import { YearMonth } from "./YearMonth"

export interface CardResponseV3 extends SummaryCardResponseV3 {
	expires: YearMonth
	usage: CardUsage
	token?: string
	cvv?: string
	cardHolderName: string
	issued?: Date
	remaining: number
	maxAmount: number
}

export namespace CardResponseV3 {
	export const type = SummaryCardResponseV3.type.extend<CardResponseV3>({
		expires: isly.fromIs("YearMonth", YearMonth.is),
		usage: isly.fromIs("CardUsage", CardUsage.is),
		token: isly.string().optional(),
		cvv: isly.string().optional(),
		cardHolderName: isly.string(),
		issued: isly.fromIs("Date", Date.is).optional(),
		remaining: isly.number(),
		maxAmount: isly.number(),
	})
	export const is = type.is
}
