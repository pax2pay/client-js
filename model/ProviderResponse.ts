import { ProviderCode } from "./ProviderCode"

/**
 * Full provider information
 */
export interface ProviderResponse {
	id?: number
	code: ProviderCode
	name?: string
	status?: "ACTIVE" | "DELETED" | "INACTIVE"
}

export namespace ProviderResponse {
	export function is(value: ProviderResponse | any): value is ProviderResponse {
		return (
			typeof value == "object" &&
			(value.id == undefined || typeof value.id == "number") &&
			ProviderCode.is(value.code) &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.name == undefined || value.status == "ACTIVE" || value.status == "DELETED" || value.status == "INACTIVE")
		)
	}
}
