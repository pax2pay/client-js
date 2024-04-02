import { isly } from "isly"
import { CardTypeSpecificationFlag } from "./CardTypeSpecificationFlag"
import { ProviderCode } from "./ProviderCode"

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
	providerCode?: ProviderCode
}

export namespace CardTypeSpecification {
	export const type = isly.object<CardTypeSpecification>({
		cardTypeId: isly.string().optional(),
		description: isly.string().optional(),
		scheme: isly.string(["VISA", "MASTERCARD", "AMERICAN_EXPRESS"]).optional(),
		funding: isly.string(["DEBIT", "CREDIT", "PREPAID"]).optional(),
		flags: isly.array(CardTypeSpecificationFlag.type).optional(),
		bin: isly.string().optional(),
		providerCode: ProviderCode.type.optional(),
	})
	export const is = type.is
}
