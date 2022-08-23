import { InvokingSystem } from "./InvokingSystem"
import { Issue } from "./Issue"
import { OrganisationResponse } from "./OrganisationResponse"
import { UserResponse } from "./UserResponse"

/**
 * Log in response. If successful, status will be SUCCESS and all of the fields will be populated. On failure, status will be FAILURE and issues will be present.
 */
export interface LoginResponse {
	issues?: Issue[]
	status?: "SUCCESS" | "FAILURE"
	token: string
	expiry: string
	invokingSystem: InvokingSystem
	trackingId: string
	user: UserResponse
	username: string
	effectiveOrganisation: OrganisationResponse
	organisation: string
}

export namespace LoginResponse {
	export function is(value: LoginResponse | any): value is LoginResponse {
		return (
			typeof value == "object" &&
			(value.issues == undefined || (Array.isArray(value.issues) && value.issues.every(Issue.is))) &&
			(value.status == undefined || value.status == "SUCCESS" || value.status == "FAILURE") &&
			typeof value.token == "string" &&
			typeof value.expiry == "string" &&
			InvokingSystem.is(value.invokingSystem) &&
			typeof value.trackingId == "string" &&
			UserResponse.is(value.user) &&
			typeof value.username == "string" &&
			OrganisationResponse.is(value.effectiveOrganisation) &&
			typeof value.organisation == "string"
		)
	}
}
