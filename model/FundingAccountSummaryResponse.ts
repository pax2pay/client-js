import { isly } from "isly"

export interface FundingAccountSummaryResponse {
	providerAccountId: string
	accountId: string
	balance: number
	friendlyName: string
}

export namespace FundingAccountSummaryResponse {
	export const type = isly.object<FundingAccountSummaryResponse>({
		providerAccountId: isly.string(),
		accountId: isly.string(),
		balance: isly.number(),
		friendlyName: isly.string(),
	})
	export const is = type.is
}
