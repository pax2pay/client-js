export interface SearchRolesetsRequest {
	name?: string
	description?: string
	includeDefaults: "INCLUDE" | "EXCLUDE" | "ONLY"
	containsRoles?: string[]
	doesNotContainRoles?: string[]
	includeInternal: "INCLUDE" | "EXCLUDE" | "ONLY"
}
