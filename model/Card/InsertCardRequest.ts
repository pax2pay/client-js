import { ProviderCode } from "../Provider/ProviderCode"
import { CardTypeSpecification } from "./CardTypeSpecification"

/**
 * The card to be created
 */
export interface InsertCardRequest {
	providerCode: ProviderCode
	cardType: CardTypeSpecification
	useAs?: string
	providerAccountId?: string
}
