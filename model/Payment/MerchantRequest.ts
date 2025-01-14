import { isly } from "isly"
import { MerchantType } from "../MerchantType"

export interface MerchantRequest {
	id?: string
	name?: string
	mcc?: string
	type?: MerchantType
}

export namespace MerchantRequest {
	export const type = isly.object<MerchantRequest>({
		id: isly.string().optional(),
		name: isly.string().optional(),
		mcc: isly.string().optional(),
		type: MerchantType.type.optional(),
	})
	export const is = type.is
}
