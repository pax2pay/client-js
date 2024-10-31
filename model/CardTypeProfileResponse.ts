import { isly } from "isly"
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
export namespace CardTypeProfileResponse {
	export const type = isly.object<CardTypeProfileResponse>({
		cardTypeProfileId: isly.string(),
		description: isly.string(),
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		status: isly.fromIs("CardTypeProfileStatus", CardTypeProfileStatus.is),
		cardTypes: isly.fromIs("CardTypeSpecification", CardTypeSpecification.is).array(),
		sharedBetween: isly.string().array(),
		isDefault: isly.boolean(),
	})
	export const is = type.is
}
