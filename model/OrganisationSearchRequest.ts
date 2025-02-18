import { isly } from "isly"
import { OrganisationFlag } from "./OrganisationFlag"
import { OrganisationStatusV2 } from "./OrganisationStatusV2"
import { ProviderCode } from "./ProviderCode"

export interface OrganisationSearchRequest {
	codes?: string[]
	activeProviders?: ProviderCode[]
	statuses?: OrganisationStatusV2[]
	channelPartners?: OrganisationFlag[]
	includeConfig?: boolean
	includeCredentials?: boolean
	includeCardTypes?: boolean
}

export namespace OrganisationSearchRequest {
	export const type = isly.object<OrganisationSearchRequest>({
		codes: isly.string().array().optional(),
		activeProviders: ProviderCode.type.array().optional(),
		statuses: OrganisationStatusV2.type.array().optional(),
		channelPartners: OrganisationFlag.type.array().optional(),
		includeConfig: isly.boolean().optional(),
		includeCredentials: isly.boolean().optional(),
		includeCardTypes: isly.boolean().optional(),
	})
	export const is = type.is
}
