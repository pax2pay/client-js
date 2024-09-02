import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"

export interface PaymentSearchRequest {
	providerCode?: ProviderCode | ProviderCode[]
}

export namespace PaymentSearchRequest {
	export const type = isly.object<PaymentSearchRequest>({
		providerCode: isly.union(ProviderCode.type, ProviderCode.type.array()).optional(),
	})
	export const is = type.is
	export interface Parameters {
		page?: number
		size?: number
		sort?: string
		asc?: boolean
		desc?: boolean
		includeCount?: boolean
	}
}
