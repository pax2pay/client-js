import { OrganisationBalanceLimitResponse } from "./OrganisationBalanceLimitResponse"

/**
 * Organisation information of the creating user
 */
export interface OrganisationResponse {
	code?: string
	name?: string
	status?: "ACTIVE" | "DELETED"
	limitResponse?: OrganisationBalanceLimitResponse
}

export namespace OrganisationResponse {
	export function is(value: OrganisationResponse | any): value is OrganisationResponse {
		return (
			typeof value == "object" &&
			(value.code == undefined || typeof value.code == "string") &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.status == undefined || value.status == "ACTIVE" || value.status == "DELETED") &&
			(value.limitResponse == undefined || OrganisationBalanceLimitResponse.is(value.limitResponse))
		)
	}
}
