import { isly } from "isly"

export type FundingType = typeof FundingType.types[number]

export namespace FundingType {
	export const types = ["DEBIT", "CREDIT", "PREPAID"] as const
	export const type = isly.string(types)
	export const is = type.is
}
