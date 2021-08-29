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
