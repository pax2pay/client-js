import { isly } from "isly"
import { OrganisationStatus } from "./OrganisationStatus"

/**
 * Organisation information of the creating user
 */
export interface OrganisationResponse {
	code: string
	name: string
	status: OrganisationStatus
}

export namespace OrganisationResponse {
	export const type = isly.object<OrganisationResponse>({
		code: isly.string(),
		name: isly.string(),
		status: OrganisationStatus.type,
	})
	export const is = type.is
}
