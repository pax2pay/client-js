import { ProviderCode } from "./ProviderCode"

export interface CardTypeResponse {
	providerCode?: ProviderCode
	cardTypeId?: string
	description?: string
	scheme?: "VISA" | "MASTERCARD" | "AMERICAN_EXPRESS"
	funding?: "DEBIT" | "CREDIT" | "PREPAID"
	currencies?: string[]
	flags?: ("CORPORATE" | "BUSINESS" | "CONSUMER")[]
	bin?: string
	preActive?: boolean
}
