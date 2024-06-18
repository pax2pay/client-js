import { isly } from "isly"
import { OrganisationRequest } from "./OrganisationRequest"

export interface OrganisationCreateRequest extends OrganisationRequest {
	code: string
}

export namespace OrganisationCreateRequest {
	export const type = OrganisationRequest.type.extend<OrganisationCreateRequest>({ code: isly.string() })
	export const is = type.is
}
