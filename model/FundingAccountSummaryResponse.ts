import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"

export interface FundingAccountSummaryResponse {
	providerCode: ProviderCode
	providerAccountId: string
	accountId: string
	balance: number
	friendlyName: string
}

export namespace FundingAccountSummaryResponse {
	export const type = isly.object<FundingAccountSummaryResponse>({
		providerCode: ProviderCode.type,
		providerAccountId: isly.string(),
		accountId: isly.string(),
		balance: isly.number(),
		friendlyName: isly.string(),
	})
	export const is = type.is
}
