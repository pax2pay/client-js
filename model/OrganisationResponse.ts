import { isly } from "isly"
import { OrganisationBalanceLimitResponse } from "./OrganisationBalanceLimitResponse"

/**
 * Organisation information of the creating user
 */
export interface OrganisationResponse {
	code: string
	name: string
	status: "ACTIVE" | "INACTIVE" | "DELETED"
	limitResponse?: OrganisationBalanceLimitResponse
}

export namespace OrganisationResponse {
	export const type = isly.object<OrganisationResponse>({
		code: isly.string(),
		name: isly.string(),
		status: isly.string(["ACTIVE", "INACTIVE", "DELETED"]),
		limitResponse: isly.fromIs("OrganisationBalanceLimitResponse", OrganisationBalanceLimitResponse.is).optional(),
	})
	export const is = type.is
}
