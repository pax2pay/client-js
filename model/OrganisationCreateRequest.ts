import { OrganisationUpdateRequest } from "./OrganisationUpdateRequest"

export interface OrganisationCreateRequest extends OrganisationUpdateRequest {
	code: string
}

export namespace OrganisationCreateRequest {
	export function is(value: OrganisationCreateRequest | any): value is OrganisationCreateRequest {
		return typeof value == "object" && typeof value.code == "string" && OrganisationUpdateRequest.is({ ...value })
	}
}
