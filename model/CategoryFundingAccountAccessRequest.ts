import { ProviderCode } from "./ProviderCode"

export interface CategoryFundingAccountAccessRequest {
	inclusive: boolean
	accounts: [ProviderCode, string][]
}
