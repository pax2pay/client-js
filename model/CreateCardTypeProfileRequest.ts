import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

export interface CreateCardTypeProfileRequest {
	cardTypeProfileId: string
	description: string
	providerCode: ProviderCode
	cardTypes?: CardTypeSpecification[]
	copyFrom?: string
	addCardTypes?: CardTypeSpecification[]
	removeCardTypes?: CardTypeSpecification[]
	organisations?: string[]
	createDefault?: boolean
}
