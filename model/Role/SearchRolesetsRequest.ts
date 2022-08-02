import { Inclusion } from "./Inclusion"

export interface SearchRolesetsRequest {
	name?: string
	description?: string
	includeDefaults: Inclusion
	containsRoles?: string[]
	doesNotContainRoles?: string[]
	includeInternal: Inclusion
}

export namespace SearchRolesetsRequest {
	export function is(value: SearchRolesetsRequest | any): value is SearchRolesetsRequest {
		return (
			typeof value == "object" &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.description == undefined || typeof value.description == "string") &&
			Inclusion.is(value.includeDefaults) &&
			(value.containsRoles == undefined ||
				(Array.isArray(value.containsRoles) && value.containsRoles.every((item: any) => typeof item == "string"))) &&
			(value.doesNotContainRoles == undefined ||
				(Array.isArray(value.doesNotContainRoles) &&
					value.doesNotContainRoles.every((item: any) => typeof item == "string"))) &&
			Inclusion.is(value.includeInternal)
		)
	}
}
