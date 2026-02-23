import { isly } from "isly"

export type BeneficiarySubType = typeof BeneficiarySubType.values[number]

export namespace BeneficiarySubType {
	export const values = ["REBATE", "MERCHANT"] as const
	export const type = isly.string<BeneficiarySubType>(values)
	export const is = type.is
}
