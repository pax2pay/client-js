import { isly } from "isly"
import { OrganisationStatus } from "./OrganisationStatus"
import { ProviderCode } from "./ProviderCode"

export interface OrganisationSearchRequest {
	codes?: string[]
	activeProviders?: ProviderCode[]
	statuses?: OrganisationStatus[]
	includeConfig?: boolean
	includeCredentials?: boolean
	includeCardTypes?: boolean
}

export namespace OrganisationSearchRequest {
	export const type = isly.object<OrganisationSearchRequest>({
		codes: isly.string().array().optional(),
		activeProviders: ProviderCode.type.array().optional(),
		statuses: OrganisationStatus.type.array().optional(),
		includeConfig: isly.boolean().optional(),
		includeCredentials: isly.boolean().optional(),
		includeCardTypes: isly.boolean().optional(),
	})
	export const is = type.is
}
