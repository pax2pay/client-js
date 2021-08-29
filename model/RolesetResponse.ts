import { RoleResponse } from "./RoleResponse"

/**
 * Rolesets that this user has been given.
 */
export interface RolesetResponse {
	name?: string
	description?: string
	isDefault?: boolean
	internal?: boolean
	containedRoles?: RoleResponse[]
}
