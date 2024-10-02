import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"

export interface PaymentSearch {
	fuzzySearch?: string
	paymentId?: string[]
	cardId?: string[]
	merchantId?: string[]
	providerCode?: ProviderCode[]
}
export namespace PaymentSearch {
	export const type = isly.object<PaymentSearch>({
		fuzzySearch: isly.string().optional(),
		paymentId: isly.string().array().optional(),
		cardId: isly.string().array().optional(),
		merchantId: isly.string().array().optional(),
		providerCode: ProviderCode.type.array().optional(),
	})
	export const is = type.is
}
