import { Currency } from "isoly"
import { isly } from "isly"
import { AbstractBeneficiaryRequest } from "./AbstractBeneficiaryRequest"

export interface UpdateMerchantRequest {
	beneficiaries?: Partial<Record<Currency, AbstractBeneficiaryRequest>>
}

export namespace UpdateMerchantRequest {
	export const type = isly.object<UpdateMerchantRequest>({
		beneficiaries: isly
			.record(
				isly.fromIs("Currency", Currency.is),
				isly.fromIs("AbstractBeneficiaryRequest", AbstractBeneficiaryRequest.is)
			)
			.optional(),
	})
	export const is = type.is
}
