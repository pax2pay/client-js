import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"

export interface FundingAccountSummaryResponse {
	providerCode: ProviderCode
	providerAccountId: string
	accountId: string
	friendlyName: string
	balance?: number
}

export namespace FundingAccountSummaryResponse {
	export const type = isly.object<FundingAccountSummaryResponse>({
		providerCode: ProviderCode.type,
		providerAccountId: isly.string(),
		accountId: isly.string(),
		balance: isly.number().optional(),
		friendlyName: isly.string(),
	})
	export const is = type.is
}
