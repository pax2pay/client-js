import { DateTime } from "isoly"

export interface ApiKeyResponse {
	identifier: string
	displayName: string
	rolesets?: string[]
	roles?: string[]
	lastKeyUsage: DateTime
	active?: boolean
	createdBy: string
}
