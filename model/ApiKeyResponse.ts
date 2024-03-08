export interface ApiKeyResponse {
	identifier: string
	displayName: string
	rolesets: string[]
	roles: string[]
	active: boolean
	createdBy: string
}
