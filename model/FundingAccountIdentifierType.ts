const fundingAccountIdentifierType = ["SCAN", "IBAN", "UNKNOWN"] as const

export type FundingAccountIdentifierType = typeof fundingAccountIdentifierType[number]

export namespace FundingAccountIdentifierType {
	export function is(value: unknown): value is FundingAccountIdentifierType {
		return typeof value == "string" && fundingAccountIdentifierType.includes(value as FundingAccountIdentifierType)
	}
}
