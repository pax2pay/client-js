import { OrganisationResponse } from "./OrganisationResponse"
import { TwoFactorAuthenticationDetails } from "./TwoFactorAuthenticationDetails"
import { UserLimitsResponse } from "./UserLimitsResponse"
import { UserStatus } from "./UserStatus"

/**
 * The users created
 */
export interface UserResponse {
	username: string
	firstName: string
	lastName: string
	email: string
	status?: UserStatus
	passwordUpdatedOn?: string
	lastLogin?: string
	category?: string
	organisation?: OrganisationResponse
	roles?: string[]
	userLimits?: UserLimitsResponse[]
	"2fa"?: TwoFactorAuthenticationDetails
}

export namespace UserResponse {
	export function is(value: UserResponse | any): value is UserResponse {
		return (
			typeof value == "object" &&
			(value.username == undefined || typeof value.username == "string") &&
			(value.firstName == undefined || typeof value.firstName == "string") &&
			(value.lastName == undefined || typeof value.lastName == "string") &&
			(value.email == undefined || typeof value.email == "string") &&
			(value.status == undefined || UserStatus.is(value.status)) &&
			(value.passwordUpdatedOn == undefined || typeof value.passwordUpdatedOn == "string") &&
			(value.lastLogin == undefined || typeof value.lastLogin == "string") &&
			(value.category == undefined || typeof value.category == "string")
		)
	}
}
