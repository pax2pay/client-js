import { UserLimitsRequest } from "./UserLimitsRequest"
import { UserStatus } from "./UserStatus"

/**
 * The users that we are creating for this organisation. Must include at least one user with an 'Default Admin' role.
 */
export interface UserRequest {
	username: string
	password: string
	firstName: string
	lastName: string
	status?: UserStatus
	email: string
	userLimits?: UserLimitsRequest[]
	rolesets?: string[]
	category?: string
}

export namespace UserRequest {
	export function is(value: UserRequest | any): value is UserRequest {
		return (
			typeof value == "object" &&
			typeof value.username == "string" &&
			typeof value.password == "string" &&
			typeof value.firstName == "string" &&
			typeof value.lastName == "string" &&
			(value.status == undefined || UserStatus.is(value.status)) &&
			typeof value.email == "string" &&
			(value.userLimits == undefined ||
				(Array.isArray(value.userLimits) && value.userLimits.every((item: any) => UserLimitsRequest.is(item)))) &&
			(value.rolesets == undefined ||
				(Array.isArray(value.rolesets) && value.rolesets.every((item: any) => typeof item == "string"))) &&
			(value.category == undefined || typeof value.category == "string")
		)
	}
}
