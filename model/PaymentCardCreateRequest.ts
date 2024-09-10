import { isly } from "isly"
import { CardUsage } from "./CardUsage"

export interface PaymentCardCreateRequest {
	cardType: string
	expires?: string
	usage?: CardUsage
}
export namespace PaymentCardCreateRequest {
	export const type = isly.object<PaymentCardCreateRequest>({
		cardType: isly.string(),
		expires: isly.string().optional(),
		usage: isly.fromIs("CardUsage", CardUsage.is).optional(),
	})
	export const is = type.is
}
