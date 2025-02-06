import * as isoly from "isoly"
import { isly } from "isly"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { YearMonth } from "./YearMonth"

export interface PaymentCardCreateRequest {
	cardType: CardTypeSpecification
	expires?: YearMonth
	usage?: CardUsage
	closeDate?: isoly.Date
	restrictToMerchant?: boolean
}
export namespace PaymentCardCreateRequest {
	export const type = isly.object<PaymentCardCreateRequest>({
		cardType: CardTypeSpecification.type,
		expires: isly.fromIs("YearMonth", YearMonth.is).optional(),
		usage: CardUsage.type.optional(),
		closeDate: isly.fromIs("Date", isoly.Date.is).optional(),
		restrictToMerchant: isly.boolean().optional(),
	})
	export const is = type.is
}
