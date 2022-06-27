export interface FundingAccountResponseV2 {
	providerAccountId: string
	balance: number
	friendlyName: string
}

export namespace FundingAccountResponseV2 {
	export function is(value: FundingAccountResponseV2 | any): value is FundingAccountResponseV2 {
		return typeof value == "object" && typeof value.providerAccountId == "string" && typeof value.balance == "number"
	}
}
