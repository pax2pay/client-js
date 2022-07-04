import { RoleResponse } from "../Role/RoleResponse"
import { RolesetResponse } from "../Role/RolesetResponse"

/**
 * Cut down version of a full user response, contains only role information.
 */
export interface UserRoleResponse {
	username?: string
	roles?: RoleResponse[]
	rolesets?: RolesetResponse[]
	allRoles?: RoleResponse[]
}
