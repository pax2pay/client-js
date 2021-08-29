import { ProviderCode } from "./ProviderCode"

/**
 * Search request for card types.
 */
export interface CardTypeSearchRequest {
	providerCode?: ProviderCode
	currency?: string
	description?: string
	descriptionContains?: string
	scheme?: "VISA" | "MASTERCARD" | "AMERICAN_EXPRESS"
	fundingType?: "DEBIT" | "CREDIT" | "PREPAID"
	flags?: ("CORPORATE" | "BUSINESS" | "CONSUMER")[]
	bin?: string
	status?: "ACTIVE" | "DEPRECATED" | "PREACTIVE" | "DISCONTINUED"
}
