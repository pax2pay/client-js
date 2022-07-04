import { CardScheme } from "./CardScheme"
import { CardTypeSpecificationFlag } from "./CardTypeSpecificationFlag"
import { FundingType } from "./FundingType"

/**
 * The card type to use in the card options requests.
 */
export interface CardTypeSpecification {
	cardTypeId?: string
	description?: string
	scheme?: CardScheme
	funding?: FundingType
	flags?: CardTypeSpecificationFlag[]
	bin?: string
}

export namespace CardTypeSpecification {
	export function is(value: CardTypeSpecification | any): value is CardTypeSpecification {
		return (
			typeof value == "object" &&
			(value.cardTypeId == undefined || typeof value.cardTypeId == "string") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.scheme == undefined || CardScheme.is(value.scheme)) &&
			(value.funding == undefined || FundingType.is(value.funding)) &&
			(value.flags == undefined || (Array.isArray(value.flags) && value.flags.every(CardTypeSpecificationFlag.is))) &&
			(value.bin == undefined || typeof value.bin == "string")
		)
	}
}
