import { CardTypeFlag } from "./CardTypeSpecificationFlag"
import { FundingType } from "./FundingType"
import { ProviderCode } from "./ProviderCode"
import { Scheme } from "./Scheme"

/**
 * Search request for card types.
 */
export interface CardTypeSearchRequest {
	providerCode?: ProviderCode
	currency?: string
	description?: string
	descriptionContains?: string
	scheme?: Scheme
	fundingType?: FundingType
	flags?: CardTypeFlag[]
	bin?: string
	status?: "ACTIVE" | "DEPRECATED" | "PREACTIVE" | "DISCONTINUED"
}
