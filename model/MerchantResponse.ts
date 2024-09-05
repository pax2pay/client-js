import { isly } from "isly"
import { MerchantType } from "./MerchantType"

export interface MerchantResponse {
	id?: string
	name?: string
	mcc?: string
	type?: MerchantType
	isSuitableForCardMerchantRestriction?: true
	// beneficiaries?: Record<Currency, BeneficiaryResponse>
}

export namespace MerchantResponse {
	export const type = isly.object<MerchantResponse>({
		id: isly.string().optional(),
		name: isly.string().optional(),
		mcc: isly.string().optional(),
		type: MerchantType.type.optional(),
		isSuitableForCardMerchantRestriction: isly.boolean(true).optional(),
	})
	export const is = type.is
}
