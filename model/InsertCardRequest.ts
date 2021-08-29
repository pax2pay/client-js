import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

/**
 * The card to be created
 */
export interface InsertCardRequest {
	providerCode: ProviderCode
	cardType: CardTypeSpecification
	useAs?: string
	providerAccountId?: string
}
