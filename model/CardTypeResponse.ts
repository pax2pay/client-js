import { Currency } from "isoly"
import { isly } from "isly"
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
	usages?: Usage[]
}

export namespace CardTypeResponse {
	export const type = isly.object<CardTypeResponse>({
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		cardTypeId: isly.string(),
		description: isly.string(),
		originalDescription: isly.string().optional(),
		scheme: Scheme.type,
		funding: FundingType.type.optional(),
		currencies: isly.array(isly.fromIs("Currency", Currency.is)).optional(),
		flags: isly.array(CardTypeFlag.type).optional(),
		bins: isly.array(isly.string()).optional(),
		preActive: isly.boolean().optional(),
		discontinued: isly.boolean().optional(),
		usages: isly.array(Usage.type).optional(),
	})
}
