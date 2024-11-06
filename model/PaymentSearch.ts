import * as isoly from "isoly"
import { isly } from "isly"
import { PaymentStatus } from "./PaymentStatus"
import { ProviderCode } from "./ProviderCode"

export interface PaymentSearch {
	fuzzySearch?: string
	status?: PaymentStatus[]
	createdBy?: string[]
	personallyApprovable?: boolean
	paymentId?: string[]
	cardId?: string[]
	merchantId?: string[]
	providerCode?: ProviderCode[]
	currency?: isoly.Currency[]
	includeCount?: boolean
	onlyCount?: boolean
}
export namespace PaymentSearch {
	export const type = isly.object<PaymentSearch>({
		fuzzySearch: isly.string().optional(),
		status: PaymentStatus.type.array().optional(),
		createdBy: isly.string().array().optional(),
		personallyApprovable: isly.boolean().optional(),
		paymentId: isly.string().array().optional(),
		cardId: isly.string().array().optional(),
		merchantId: isly.string().array().optional(),
		providerCode: ProviderCode.type.array().optional(),
		currency: isly.array(isly.fromIs("Currency", isoly.Currency.is)).optional(),
		includeCount: isly.boolean().optional(),
		onlyCount: isly.boolean().optional(),
	})
	export const is = type.is
}
