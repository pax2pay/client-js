import { isly } from "isly"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

/**
 * The card to be created
 */
export interface InsertCardRequest {
	providerCode: ProviderCode
	cardType: CardTypeSpecification | string
	useAs?: CardTypeSpecification | string
	providerAccountId?: string
}

export namespace InsertCardRequest {
	export const type = isly.object<InsertCardRequest>({
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		cardType: isly.union(CardTypeSpecification.type, isly.string()),
		useAs: isly.union(CardTypeSpecification.type, isly.string()).optional(),
		providerAccountId: isly.string().optional(),
	})
	export const is = type.is
}
