export interface FundingAccountSummaryResponse {
	providerAccountId: string
	balance: number
	friendlyName: string
}

export namespace FundingAccountSummaryResponse {
	export function is(value: FundingAccountSummaryResponse | any): value is FundingAccountSummaryResponse {
		return (
			typeof value == "object" &&
			typeof value.providerAccountId == "string" &&
			typeof value.balance == "number" &&
			typeof value.friendlyName == "string"
		)
	}
}
