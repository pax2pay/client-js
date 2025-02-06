import * as isoly from "isoly"
import { isly } from "isly"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"

export interface PaymentCardCreateRequest {
	cardType: CardTypeSpecification
	expires?: string
	usage?: CardUsage
	closeDate?: isoly.Date
	restrictToMerchant?: boolean
}
export namespace PaymentCardCreateRequest {
	export const type = isly.object<PaymentCardCreateRequest>({
		cardType: isly.fromIs("CardTypeSpecification", CardTypeSpecification.is),
		expires: isly.string().optional(),
		usage: CardUsage.type.optional(),
		closeDate: isly.fromIs("Date", isoly.Date.is).optional(),
		restrictToMerchant: isly.boolean().optional(),
	})
	export const is = type.is
}
