import { ProviderCode } from "./ProviderCode"

export interface CardTypeResponseV2 {
	providerCode: ProviderCode
	cardTypeId: string
	description: string
	originalDescription?: string
	scheme: "VISA" | "MASTERCARD" | "AMERICAN_EXPRESS"
	funding?: "DEBIT" | "CREDIT" | "PREPAID"
	currencies?: string[]
	flags?: ("CORPORATE" | "BUSINESS" | "CONSUMER")[]
	bins?: string[]
	preActive?: boolean
	discontinued?: boolean
}
