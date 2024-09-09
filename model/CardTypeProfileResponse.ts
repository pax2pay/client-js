import { CardTypeProfileStatus } from "./CardTypeProfileStatus"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

export interface CardTypeProfileResponse {
	cardTypeProfileId: string
	description: string
	providerCode: ProviderCode
	status: CardTypeProfileStatus
	cardTypes: CardTypeSpecification[]
	sharedBetween: string[]
	isDefault: boolean
}
