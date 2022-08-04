import { OrganisationCreateBalanceLimitRequest } from "./OrganisationCreateBalanceLimitRequest"
/**
 * Information for creating organisation
 */
export interface OrganisationRequest {
	status: "ACTIVE" | "DELETED"
	name: string
	organisationLimitRequest?: OrganisationCreateBalanceLimitRequest
}

export namespace OrganisationRequest {
	export function is(value: OrganisationRequest | any): value is OrganisationRequest {
		return (
			typeof value == "object" &&
			(value.status == "ACTIVE" || value.status == "DELETED") &&
			typeof value.name == "string" &&
			(value.organisationLimitRequest == undefined ||
				OrganisationCreateBalanceLimitRequest.is(value.organisationLimitRequest))
		)
	}
}
