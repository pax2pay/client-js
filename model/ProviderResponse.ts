import { ProviderCode } from "./ProviderCode"

/**
 * Full provider information
 */
export interface ProviderResponse {
	id?: number
	code?: ProviderCode
	name?: string
	status?: "ACTIVE" | "DELETED" | "INACTIVE"
}
