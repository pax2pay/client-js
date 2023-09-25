import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

export interface CardTypeProfileResponse {
	cardTypeProfileId: string
	description: string
	providerCode: ProviderCode
	status: "ACTIVE" | "DELETED" | "DEPRECATED"
	cardTypes: CardTypeSpecification
	sharedBetween: string[]
	isDefault: boolean
}
