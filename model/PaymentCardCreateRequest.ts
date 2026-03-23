import * as isoly from "isoly"
import { isly } from "isly"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { YearMonth } from "./YearMonth"

export interface PaymentCardCreateRequest {
	cardType: CardTypeSpecification | string
	expires?: YearMonth
	usage?: CardUsage
	closeDate?: isoly.Date
	restrictToMerchant?: boolean
	minimumTransactionValue?: number
}
export namespace PaymentCardCreateRequest {
	export const type = isly.object<PaymentCardCreateRequest>({
		cardType: isly.union(CardTypeSpecification.type, isly.string()),
		expires: isly.fromIs("YearMonth", YearMonth.is).optional(),
		usage: CardUsage.type.optional(),
		closeDate: isly.fromIs("Date", isoly.Date.is).optional(),
		restrictToMerchant: isly.boolean().optional(),
		minimumTransactionValue: isly.number().optional(),
	})
	export const is = type.is
}
