import { OrganisationBalanceLimitResponse } from "./OrganisationBalanceLimitResponse"

/**
 * Organisation information of the creating user
 */
export interface OrganisationResponse {
	code: string
	name: string
	status: "ACTIVE" | "DELETED"
	limitResponse?: OrganisationBalanceLimitResponse
}

export namespace OrganisationResponse {
	export function is(value: OrganisationResponse | any): value is OrganisationResponse {
		return (
			typeof value == "object" &&
			typeof value.code == "string" &&
			typeof value.name == "string" &&
			(value.status == "ACTIVE" || value.status == "DELETED") &&
			(value.limitResponse == undefined || OrganisationBalanceLimitResponse.is(value.limitResponse))
		)
	}
}
