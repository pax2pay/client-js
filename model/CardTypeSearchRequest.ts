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
	fundingType?: "DEBIT" | "CREDIT" | "PREPAID"
	flags?: ("CORPORATE" | "BUSINESS" | "CONSUMER")[]
	bin?: string
	status?: "ACTIVE" | "DEPRECATED" | "PREACTIVE" | "DISCONTINUED"
}
