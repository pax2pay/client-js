/**
 * All roles that this user has, from all rolesets and individual roles
 */
export interface RoleResponse {
	name?: string
	description?: string
	internal?: boolean
}

export namespace RoleResponse {
	export function is(value: RoleResponse | any): value is RoleResponse {
		return (
			typeof value == "object" &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.internal == undefined || typeof value.internal == "boolean")
		)
	}
}
