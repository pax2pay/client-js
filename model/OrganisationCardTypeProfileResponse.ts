import { CardTypeProfileResponse } from "./CardTypeProfileResponse"

export interface OrganisationCardTypeProfileResponse {
	organisationCode: string
	cardTypeProfiles: CardTypeProfileResponse[]
}
