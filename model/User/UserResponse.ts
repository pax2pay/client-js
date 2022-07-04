import { TwoFactorAuthenticationDetails } from "../Authentication/TwoFactorAuthenticationDetails"
import { OrganisationResponse } from "../Organisation/OrganisationResponse"
import { UserLimit } from "./UserLimit"

/**
 * The users created
 */
export interface UserResponse {
	username?: string
	firstName?: string
	lastName?: string
	email?: string
	status?: "ACTIVE" | "INACTIVE" | "DELETED" | "PASSWORD_EXPIRED"
	passwordUpdatedOn?: string
	category?: string
	organisation?: OrganisationResponse
	roles?: string[]
	userLimits?: UserLimit[]
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
			(value.status == undefined ||
				value.status == "ACTIVE" ||
				value.status == "INACTIVE" ||
				value.status == "DELETED" ||
				value.status == "PASSWORD_EXPIRED") &&
			(value.passwordUpdatedOn == undefined || typeof value.passwordUpdatedOn == "string") &&
			(value.category == undefined || typeof value.category == "string")
		)
	}
}
