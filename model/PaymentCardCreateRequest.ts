import { isly } from "isly"
import { PaymentCardUsage } from "./PaymentCardUsage"

export interface PaymentCardCreateRequest {
	cardType: string
	expires?: string
	usage?: PaymentCardUsage
}
export namespace PaymentCardCreateRequest {
	export const type = isly.object<PaymentCardCreateRequest>({
		cardType: isly.string(),
		expires: isly.string().optional(),
		usage: isly.fromIs("CardUsage", PaymentCardUsage.is).optional(),
	})
	export const is = type.is
}
