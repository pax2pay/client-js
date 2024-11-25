import { Currency } from "isoly"
import { ProviderCode } from "./ProviderCode"
import { Scheme } from "./Scheme"

export interface CardTypeResponse {
	providerCode: ProviderCode
	cardTypeId: string
	description: string
	originalDescription?: string
	scheme: Scheme
	funding?: "DEBIT" | "CREDIT" | "PREPAID"
	currencies?: Currency[]
	flags?: ("CORPORATE" | "BUSINESS" | "CONSUMER")[]
	bins?: string[]
	preActive?: boolean
	discontinued?: boolean
}
