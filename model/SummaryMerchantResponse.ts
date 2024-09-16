import { isly } from "isly"

export interface SummaryMerchantResponse {
	name: string
}
export namespace SummaryMerchantResponse {
	export const type = isly.object<SummaryMerchantResponse>({ name: isly.string() })
	export const is = type.is
}
