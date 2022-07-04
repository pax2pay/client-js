import * as isoly from "isoly"
import { ProviderCode } from "../Provider/ProviderCode"
import { CardScheme } from "./CardScheme"
import { CardTypeSpecificationFlag } from "./CardTypeSpecificationFlag"
import { FundingType } from "./FundingType"

export interface CardTypeResponse {
	providerCode?: ProviderCode
	cardTypeId?: string
	description?: string
	scheme?: CardScheme
	funding?: FundingType
	currencies?: isoly.Currency[]
	flags?: CardTypeSpecificationFlag[]
	bins?: string[]
	preActive?: boolean
	discontinued?: boolean
}
