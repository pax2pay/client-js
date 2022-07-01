import { CardTypeSpecificationFlag } from "./CardTypeSpecificationFlag"

/**
 * The card type to use in the card options requests.
 */
export interface CardTypeSpecification {
	cardTypeId?: string
	description?: string
	scheme?: "VISA" | "MASTERCARD" | "AMERICAN_EXPRESS"
	funding?: "DEBIT" | "CREDIT" | "PREPAID"
	flags?: CardTypeSpecificationFlag[]
	bin?: string
}

export namespace CardTypeSpecification {
	export function is(value: CardTypeSpecification | any): value is CardTypeSpecification {
		return (
			typeof value == "object" &&
			(value.cardTypeId == undefined || typeof value.cardTypeId == "string") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.scheme == undefined ||
				value.scheme == "VISA" ||
				value.scheme == "MASTERCARD" ||
				value.scheme == "AMERICAN_EXPRESS") &&
			(value.funding == undefined ||
				value.funding == "DEBIT" ||
				value.funding == "CREDIT" ||
				value.funding == "PREPAID") &&
			(value.flags == undefined || (Array.isArray(value.flags) && value.flags.every(CardTypeSpecificationFlag.is))) &&
			(value.bin == undefined || typeof value.bin == "string")
		)
	}
}
