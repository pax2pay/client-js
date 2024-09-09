import { CardTypeProfileStatus } from "./CardTypeProfileStatus"
import { CardTypeSpecification } from "./CardTypeSpecification"

export interface UpdateCardTypeProfileRequest {
	description?: string
	status?: CardTypeProfileStatus
	cardTypes?: CardTypeSpecification[]
	addCardTypes?: CardTypeSpecification[]
	removeCardTypes?: CardTypeSpecification[]
	organisations?: string[]
	addOrganisations?: string[]
	removeOrganisations?: string[]
}
