import { AccountState } from "./AccountState"
import { OrganisationRealm } from "./OrganisationRealm"
import { ProviderCode } from "./ProviderCode"

/**
 * Search request for card types.
 */
export interface FundingAccountSearchRequest {
	accountId?: string
	friendlyName?: string
	providerCodes?: ProviderCode[]
	currency?: string
	balance?: number
	state?: AccountState[]
	providerAccountId?: string
	realm?: OrganisationRealm
	overrideCategoryAccess?: boolean
}
