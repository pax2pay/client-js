import { DateTime } from "isoly"
import { Range } from "./Range"

export interface ApiKeyResponse {
	identifier: string
	displayName: string
	rolesets?: string[]
	roles?: string[]
	lastKeyUsage: Range<DateTime>
	active?: boolean
	createdBy: string
}
