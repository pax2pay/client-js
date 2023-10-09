import { OrganisationBalanceLimitResponse } from "./OrganisationBalanceLimitResponse"

/**
 * Information for creating organisation
 */
export interface OrganisationRequest {
	name: string
	status: "ACTIVE" | "DELETED"
	organisationLimitRequest?: OrganisationBalanceLimitResponse
}
