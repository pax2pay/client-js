import { Role } from "./Role"

/**
 * All roles that this user has, from all rolesets and individual roles
 */
export interface RoleResponse {
	name?: Role
	description?: string
	internal?: boolean
}
