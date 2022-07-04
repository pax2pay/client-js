const fundingType = ["DEBIT", "CREDIT", "PREPAID"] as const

export type FundingType = typeof fundingType[number]

export namespace FundingType {
	export function is(value: unknown): value is FundingType {
		return typeof value == "string" && fundingType.includes(value as FundingType)
	}
}
