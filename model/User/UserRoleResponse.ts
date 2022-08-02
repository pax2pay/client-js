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

export namespace UserRoleResponse {
	export function is(value: UserRoleResponse | any): value is UserRoleResponse {
		return (
			typeof value == "object" &&
			(value.username == undefined || typeof value.username == "string") &&
			(value.roles == undefined ||
				(Array.isArray(value.roles) && value.roles.every((item: any) => RoleResponse.is(item)))) &&
			(value.rolesets == undefined ||
				(Array.isArray(value.rolesets) && value.rolesets.every((item: any) => RolesetResponse.is(item)))) &&
			(value.allRoles == undefined ||
				(Array.isArray(value.allRoles) && value.allRoles.every((item: any) => RoleResponse.is(item))))
		)
	}
}
