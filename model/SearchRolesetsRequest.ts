import { Inclusion } from "./Inclusion"

export interface SearchRolesetsRequest {
	name?: string
	description?: string
	includeDefaults?: Inclusion
	containsRoles?: string[]
	doesNotContainRoles?: string[]
	includeInternal?: Inclusion
	includeShared?: Inclusion
	appliesTo?: "USER" | "API_KEY"
}
