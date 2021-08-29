export interface LoginRequest {
	username: string
	password: string
	effectiveOrganisation?: string
	trackingId?: string
	consumersReference?: string
}
