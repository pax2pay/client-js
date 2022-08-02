export interface UserSearchRequest {
	username?: string
	firstName?: string
	lastName?: string
	email?: string
	category?: string
}

export namespace UserSearchRequest {
	export function is(value: UserSearchRequest | any): value is UserSearchRequest {
		return (
			typeof value == "object" &&
			(value.username == undefined || typeof value.username == "string") &&
			(value.firstName == undefined || typeof value.firstName == "string") &&
			(value.lastName == undefined || typeof value.lastName == "string") &&
			(value.email == undefined || typeof value.email == "string") &&
			(value.category == undefined || typeof value.category == "string")
		)
	}
}
