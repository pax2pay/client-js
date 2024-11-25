import { Currency } from "isoly"
import { ProviderCode } from "./ProviderCode"

export interface CardTypeResponse {
	providerCode: ProviderCode
	cardTypeId: string
	description: string
	originalDescription?: string
	scheme: "VISA" | "MASTERCARD" | "AMERICAN_EXPRESS"
	funding?: "DEBIT" | "CREDIT" | "PREPAID"
	currencies?: Currency[]
	flags?: ("CORPORATE" | "BUSINESS" | "CONSUMER")[]
	bins?: string[]
	preActive?: boolean
	discontinued?: boolean
}
