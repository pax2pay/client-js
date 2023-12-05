import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

export interface CardTypeProfileRequest {
	cardTypeProfileId: string
	description: string
	providerCode: ProviderCode
	cardTypes?: CardTypeSpecification[]
	copyFrom?: string
	addCardTypes?: CardTypeSpecification[]
	removeCardTypes?: CardTypeSpecification[]
	organisatons?: string[]
	createDefault?: boolean
}
