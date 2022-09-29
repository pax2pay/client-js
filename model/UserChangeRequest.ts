import { UserLimitsRequest } from "./UserLimitsRequest"
import { UserStatus } from "./UserStatus"

export interface UserChangeRequest {
	firstName: string
	lastName: string
	email: string
	category?: string
	status?: UserStatus
	userLimits?: UserLimitsRequest[]
	removeCategory?: boolean
}

export namespace UserChangeRequest {
	export function is(value: UserChangeRequest | any): value is UserChangeRequest {
		return (
			typeof value == "object" &&
			typeof value.firstName == "string" &&
			typeof value.lastName == "string" &&
			typeof value.email == "string" &&
			(value.category == undefined || typeof value.category == "string") &&
			(value.status == undefined || UserStatus.is(value.status)) &&
			(value.userLimits == undefined ||
				(Array.isArray(value.userLimits) && value.userLimits.every((item: any) => UserLimitsRequest.is(item)))) &&
			(value.removeCategory == undefined || typeof value.removeCategory == "boolean")
		)
	}
}
