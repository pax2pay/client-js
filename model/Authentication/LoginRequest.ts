export interface LoginRequest {
	username: string
	password: string
	effectiveOrganisation?: string
	trackingId?: string
	consumersReference?: string
}

export namespace LoginRequest {
	export function is(value: LoginRequest | any): value is LoginRequest {
		return (
			typeof value == "object" &&
			typeof value.username == "string" &&
			typeof value.password == "string" &&
			(value.effectiveOrganisation == undefined || typeof value.effectiveOrganisation == "string") &&
			(value.trackingId == undefined || typeof value.trackingId == "string") &&
			(value.consumersReference == undefined || typeof value.consumersReference == "string")
		)
	}
}
