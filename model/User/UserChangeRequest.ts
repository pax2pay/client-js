import { UserLimitsRequest } from "./UserLimitsRequest"

export interface UserChangeRequest {
	firstName: string
	lastName: string
	email: string
	category?: string
	userLimits?: UserLimitsRequest[]
}

export namespace UserChangeRequest {
	export function is(value: UserChangeRequest | any): value is UserChangeRequest {
		return (
			typeof value == "object" &&
			typeof value.firstName == "string" &&
			typeof value.lastName == "string" &&
			typeof value.email == "string" &&
			(value.category == undefined || typeof value.category == "string") &&
			(value.userLimits == undefined ||
				(Array.isArray(value.userLimits) && value.userLimits.every((item: any) => UserLimitsRequest.is(item))))
		)
	}
}
