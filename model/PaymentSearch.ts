import { isly } from "isly"

export interface PaymentSearch {
	paymentId?: string[]
	cardId?: string[]
	merchantId?: string[]
}
export namespace PaymentSearch {
	export const type = isly.object<PaymentSearch>({
		paymentId: isly.array(isly.string()).optional(),
		cardId: isly.array(isly.string()).optional(),
		merchantId: isly.array(isly.string()).optional(),
	})
	export const is = type.is
}
