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

export namespace RolesetResponse {
	export function is(value: RolesetResponse | any): value is RolesetResponse {
		return (
			typeof value == "object" &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.isDefault == undefined || typeof value.isDefault == "boolean") &&
			(value.internal == undefined || typeof value.internal == "boolean") &&
			(value.containedRoles == undefined ||
				(Array.isArray(value.containedRoles) && value.containedRoles.every((item: any) => RoleResponse.is(item))))
		)
	}
}
