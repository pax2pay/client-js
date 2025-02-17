import { isly } from "isly"

export interface MerchantDetailsV2 {
	mcc?: string
	name?: string
	country?: string
}
export namespace MerchantDetailsV2 {
	export const type = isly.object<MerchantDetailsV2>({
		mcc: isly.string().optional(),
		name: isly.string().optional(),
		country: isly.string().optional(),
	})
}
