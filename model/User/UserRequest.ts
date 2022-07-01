/**
 * The users that we are creating for this organisation. Must include at least one user with an 'Default Admin' role.
 */
export interface UserRequest {
	username: string
	password: string
	firstName: string
	lastName: string
	email: string
	rolesets?: string[]
	category?: string
}
