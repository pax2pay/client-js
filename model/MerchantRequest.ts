import { Currency } from "isoly"
import { isly } from "isly"
import { BeneficiaryRequest } from "./BeneficiaryRequest"
import { MerchantType } from "./MerchantType"

export interface MerchantRequest {
	id?: string
	name: string
	mcc?: string
	type: MerchantType
	logoUrl?: string
	beneficiaries?: Partial<Record<Currency, BeneficiaryRequest>>
}

export namespace MerchantRequest {
	export const type = isly.object<MerchantRequest>({
		id: isly.string().optional(),
		name: isly.string(),
		mcc: isly.string().optional(),
		type: MerchantType.type,
		logoUrl: isly.string().optional(),
		beneficiaries: isly
			.record(isly.fromIs("Currency", Currency.is), isly.fromIs("BeneficiaryRequest", BeneficiaryRequest.is))
			.optional(),
	})
	export const is = type.is
}
