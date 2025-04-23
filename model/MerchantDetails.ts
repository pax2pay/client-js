import { isly } from "isly"

export interface MerchantDetails {
	mcc?: string
	merchantName?: string
	merchantCountry?: string
}
export namespace MerchantDetails {
	export const type = isly.object<MerchantDetails>({
		mcc: isly.string().optional(),
		merchantName: isly.string().optional(),
		merchantCountry: isly.string().optional(),
	})
	export const is = type.is
}
