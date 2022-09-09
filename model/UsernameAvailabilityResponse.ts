export interface UsernameAvailabilityResponse {
	username?: string
	available?: boolean
	inOwnOrganisation?: boolean
	suggestion?: string
}

export namespace UsernameAvailabilityResponse {
	export function is(value: UsernameAvailabilityResponse | any): value is UsernameAvailabilityResponse {
		return (
			typeof value == "object" &&
			(value.username == undefined || typeof value.username == "string") &&
			(value.available == undefined || typeof value.available == "boolean") &&
			(value.inOwnOrganisation == undefined || typeof value.inOwnOrganisation == "boolean") &&
			(value.suggestion == undefined || typeof value.suggestion == "string")
		)
	}
}
