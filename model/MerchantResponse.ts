import { Currency } from "isoly"
import { isly } from "isly"
import { BeneficiaryResponse } from "./BeneficiaryResponse"
import { MerchantResponseStatus } from "./MerchantResponseStatus"
import { MerchantType } from "./MerchantType"

export interface MerchantResponse {
	id?: string
	name?: string
	mcc?: string
	type?: MerchantType
	isSuitableForCardMerchantRestriction?: true
	beneficiaries?: Partial<Record<Currency, BeneficiaryResponse>>
	status: MerchantResponseStatus
	organisations?: string[]
}

export namespace MerchantResponse {
	export const type = isly.object<MerchantResponse>({
		id: isly.string().optional(),
		name: isly.string().optional(),
		mcc: isly.string().optional(),
		type: MerchantType.type.optional(),
		isSuitableForCardMerchantRestriction: isly.boolean(true).optional(),
		status: MerchantResponseStatus.type,
		beneficiaries: isly
			.record(isly.fromIs("Currency", Currency.is), isly.fromIs("BeneficiaryResponse", BeneficiaryResponse.is))
			.optional(),
		organisations: isly.string().array().optional(),
	})
	export const is = type.is
}
