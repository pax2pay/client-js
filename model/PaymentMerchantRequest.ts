import { isly } from "isly"
import { MerchantType } from "./MerchantType"

export interface PaymentMerchantRequest {
	id?: string
	name?: string
	mcc?: string
	type?: MerchantType
}

export namespace PaymentMerchantRequest {
	export const type = isly.object<PaymentMerchantRequest>({
		id: isly.string().optional(),
		name: isly.string().optional(),
		mcc: isly.string().optional(),
		type: MerchantType.type.optional(),
	})
	export const is = type.is
}
