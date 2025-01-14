import { AccountState } from "./AccountState"
import { ProviderCode } from "./ProviderCode"

export interface FundingAccountSearchRequest {
	friendlyName?: string
	providerCodes?: ProviderCode[]
	currency?: string
	accountState?: AccountState
	providerAccountId?: string
}
