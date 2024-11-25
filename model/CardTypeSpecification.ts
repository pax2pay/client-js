import { isly } from "isly"
import { CardTypeFlag } from "./CardTypeSpecificationFlag"
import { FundingType } from "./FundingType"
import { ProviderCode } from "./ProviderCode"
import { Scheme } from "./Scheme"

/**
 * The card type to use in the card options requests.
 */
export interface CardTypeSpecification {
	cardTypeId?: string
	description?: string
	scheme?: Scheme
	funding?: FundingType
	flags?: CardTypeFlag[]
	bin?: string
	providerCode?: ProviderCode
}

export namespace CardTypeSpecification {
	export const type = isly.object<CardTypeSpecification>({
		cardTypeId: isly.string().optional(),
		description: isly.string().optional(),
		scheme: Scheme.type.optional(),
		funding: FundingType.type.optional(),
		flags: isly.array(CardTypeFlag.type).optional(),
		bin: isly.string().optional(),
		providerCode: ProviderCode.type.optional(),
	})
	export const is = type.is
}
