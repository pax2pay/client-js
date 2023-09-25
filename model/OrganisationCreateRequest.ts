import { OrganisationUpdateRequest } from "./OrganisationUpdateRequest"

export interface OrganisationCreateRequest extends OrganisationUpdateRequest {
	code: string
}
