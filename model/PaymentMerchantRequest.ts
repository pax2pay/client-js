import { isly } from "isly"
import { MerchantType } from "./MerchantType"

export interface PaymentMerchantRequest {
	id?: string
	name?: string
	mcc?: string
	type?: MerchantType
	/** Locks the payment's card to this merchant. Card payments only, and only with certain providers. */
	locked?: boolean
}

export namespace PaymentMerchantRequest {
	export const type = isly.object<PaymentMerchantRequest>({
		id: isly.string().optional(),
		name: isly.string().optional(),
		mcc: isly.string().optional(),
		type: MerchantType.type.optional(),
		locked: isly.boolean().optional(),
	})
	export const is = type.is
}
