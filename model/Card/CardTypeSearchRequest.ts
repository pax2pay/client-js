import * as isoly from "isoly"
import { ProviderCode } from "../Provider/ProviderCode"
import { CardScheme } from "./CardScheme"
import { CardTypeSpecificationFlag } from "./CardTypeSpecificationFlag"
import { FundingType } from "./FundingType"

/**
 * Search request for card types.
 */
export interface CardTypeSearchRequest {
	providerCode?: ProviderCode
	currency?: isoly.Currency
	description?: string
	descriptionContains?: string
	scheme?: CardScheme
	fundingType?: FundingType
	flags?: CardTypeSpecificationFlag[]
	bin?: string
	status?: "ACTIVE" | "DEPRECATED" | "PREACTIVE" | "DISCONTINUED"
}
