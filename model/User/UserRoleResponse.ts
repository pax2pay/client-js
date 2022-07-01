import { RoleResponse } from "../Roles/RoleResponse"
import { RolesetResponse } from "../Roles/RolesetResponse"

/**
 * Cut down version of a full user response, contains only role information.
 */
export interface UserRoleResponse {
	username?: string
	roles?: RoleResponse[]
	rolesets?: RolesetResponse[]
	allRoles?: RoleResponse[]
}
