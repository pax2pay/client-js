import { OrganisationBalanceLimitResponse } from "./OrganisationBalanceLimitResponse"

export interface OrganisationUpdateRequest {
	name: string
	status: "ACTIVE" | "DELETED"
	organisationLimitRequest?: OrganisationBalanceLimitResponse
}
