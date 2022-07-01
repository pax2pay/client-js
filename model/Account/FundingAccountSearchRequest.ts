import { ProviderCode } from "../ProviderCode"

/**
 * Search request for card types.
 */
export interface FundingAccountSearchRequest {
	friendlyName?: string
	providerCodes?: ProviderCode[]
	currency?: string
	accountState?:
		| "ACTIVE"
		| "INACTIVE"
		| "CLOSED"
		| "DELETED"
		| "EXPIRED"
		| "PENDING"
		| "APPROVED"
		| "DECLINED"
		| "GENERATED"
	providerAccountId?: string
}
