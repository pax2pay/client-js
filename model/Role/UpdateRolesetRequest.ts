/**
 * Request to update a roleset.
 */
export interface UpdateRolesetRequest {
	name?: string
	description?: string
	roles?: string[]
	addRoles?: string[]
	removeRoles?: string[]
}

export namespace UpdateRolesetRequest {
	export function is(value: UpdateRolesetRequest | any): value is UpdateRolesetRequest {
		return (
			typeof value == "object" &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.roles == undefined ||
				(Array.isArray(value.roles) && value.roles.every((item: any) => typeof item == "string"))) &&
			(value.addRoles == undefined ||
				(Array.isArray(value.addRoles) && value.addRoles.every((item: any) => typeof item == "string"))) &&
			(value.removeRoles == undefined ||
				(Array.isArray(value.removeRoles) && value.removeRoles.every((item: any) => typeof item == "string")))
		)
	}
}
