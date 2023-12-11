import { OrganisationBalanceLimitResponse } from "./OrganisationBalanceLimitResponse"

export interface OrganisationUpdateRequest {
	name: string
	status: "ACTIVE" | "DELETED"
	organisationLimitRequest?: OrganisationBalanceLimitResponse
}
export namespace OrganisationUpdateRequest {
	export function is(value: OrganisationUpdateRequest | any): value is OrganisationUpdateRequest {
		return (
			typeof value == "object" &&
			(value.status == "ACTIVE" || value.status == "DELETED") &&
			(value.organisationLimitRequest == undefined ||
				OrganisationBalanceLimitResponse.is(value.organisationLimitRequest))
		)
	}
}
