import { isly } from "isly"
import { BeneficiaryRequest } from "./BeneficiaryRequest"
import { ExistingBeneficiaryRequest } from "./ExistingBeneficiaryRequest"

export type AbstractBeneficiaryRequest = ExistingBeneficiaryRequest | BeneficiaryRequest

export namespace AbstractBeneficiaryRequest {
	export const type = isly.union(ExistingBeneficiaryRequest.type, BeneficiaryRequest.type)
	export const is = type.is
}
