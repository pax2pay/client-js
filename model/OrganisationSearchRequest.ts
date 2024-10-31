import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"

export interface OrganisationSearchRequest {
	codes?: string[]
	activeProviders?: ProviderCode[]
	statuses?: ("active" | "inactive" | "deleted")[]
	includeConfig?: boolean
	includeCredentials?: boolean
	includeCardTypes?: boolean
}

export namespace OrganisationSearchRequest {
	export const type = isly.object<OrganisationSearchRequest>({
		codes: isly.string().array().optional(),
		activeProviders: isly.fromIs("ProviderCode", ProviderCode.is).array().optional(),
		statuses: isly.string(["active", "inactive", "deleted"]).array().optional(),
		includeConfig: isly.boolean().optional(),
		includeCredentials: isly.boolean().optional(),
		includeCardTypes: isly.boolean().optional(),
	})
	export const is = type.is
}
