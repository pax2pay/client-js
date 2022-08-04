import { OrganisationRequest } from "./OrganisationRequest"
interface OrganisationCreateRequest extends OrganisationRequest {
	code: string
}

export namespace OrganisationCreateRequest {
	export function is(value: OrganisationCreateRequest | any): value is OrganisationCreateRequest {
		return (
			typeof value == "object" &&
			OrganisationRequest.is({
				status: value.status,
				name: value.name,
				organisationLimitRequest: value.organisationLimitRequest,
			}) &&
			typeof value.code == "string"
		)
	}
}
