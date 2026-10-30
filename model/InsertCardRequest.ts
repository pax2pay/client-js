import { isly } from "isly"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"
import { Usage } from "./Usage"

/**
 * The card to be created
 */
export interface InsertCardRequest {
	providerCode: ProviderCode
	cardType: CardTypeSpecification | string
	useAs?: CardTypeSpecification | string
	providerAccountId?: string
	/** Usage of the cards created, unset meaning single use */
	usage?: Usage
}

export namespace InsertCardRequest {
	export const type = isly.object<InsertCardRequest>({
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		cardType: isly.union(CardTypeSpecification.type, isly.string()),
		useAs: isly.union(CardTypeSpecification.type, isly.string()).optional(),
		providerAccountId: isly.string().optional(),
		usage: Usage.type.optional(),
	})
	export const is = type.is
}
