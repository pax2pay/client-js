import { Currency } from "isoly"
import { isly } from "isly"
import { BeneficiaryResponse } from "./BeneficiaryResponse"

export interface UpdateMerchantRequest {
	beneficiaries?: Partial<Record<Currency, BeneficiaryResponse>>
}

export namespace UpdateMerchantRequest {
	export const type = isly.object<UpdateMerchantRequest>({
		beneficiaries: isly
			.record(isly.fromIs("Currency", Currency.is), isly.fromIs("BeneficiaryResponse", BeneficiaryResponse.is))
			.optional(),
	})
	export const is = type.is
}
