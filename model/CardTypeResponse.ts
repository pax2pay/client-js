import { Currency } from "isoly"
import { CardTypeFlag } from "./CardTypeSpecificationFlag"
import { FundingType } from "./FundingType"
import { ProviderCode } from "./ProviderCode"
import { Scheme } from "./Scheme"
import { Usage } from "./Usage"

export interface CardTypeResponse {
	providerCode: ProviderCode
	cardTypeId: string
	description: string
	originalDescription?: string
	scheme: Scheme
	funding?: FundingType
	currencies?: Currency[]
	flags?: CardTypeFlag[]
	bins?: string[]
	preActive?: boolean
	discontinued?: boolean
	usage?: Usage
}
