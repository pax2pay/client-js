/**
 * Information for creating organisation
 */
export interface OrganisationRequest {
	code: string
	name: string
}

export namespace OrganisationRequest {
	export function is(value: OrganisationRequest | any): value is OrganisationRequest {
		return typeof value == "object" && typeof value.code == "string" && typeof value.name == "string"
	}
}
