import { isly } from "isly"

export type BeneficiarySubTypeSearch = typeof BeneficiarySubTypeSearch.values[number]

export namespace BeneficiarySubTypeSearch {
	export const values = ["REBATE", "MERCHANT", "NONE"] as const
	export const type = isly.string<BeneficiarySubTypeSearch>(values)
	export const is = type.is
}
