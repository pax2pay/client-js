import { isly } from "isly"

export interface ExistingBeneficiaryRequest {
	beneficiaryId: string
}
export namespace ExistingBeneficiaryRequest {
	export const type = isly.object<ExistingBeneficiaryRequest>({
		beneficiaryId: isly.string(),
	})
	export const is = type.is
}
