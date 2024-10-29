import { isly } from "isly"
import { CardTypeProfileResponse } from "./CardTypeProfileResponse"

export interface OrganisationCardTypeProfileResponse {
	organisationCode: string
	cardTypeProfiles: CardTypeProfileResponse[]
}
export namespace OrganisationCardTypeProfileResponse {
	export const type = isly.object<OrganisationCardTypeProfileResponse>({
		organisationCode: isly.string(),
		cardTypeProfiles: isly.fromIs("CardTypeProfileResponse", CardTypeProfileResponse.is).array(),
	})
	export const is = type.is
}
