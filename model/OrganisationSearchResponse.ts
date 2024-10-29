import { isly } from "isly"
import { AccountType } from "./AccountType"
import { ActiveCardType } from "./ActiveCardType"
import { InternalOrganisationConfig } from "./InternalOrganisationConfig"
import { OrganisationConfig } from "./OrganisationConfig"
import { OrganisationRealm } from "./OrganisationRealm"
import { OrganisationResponse } from "./OrganisationResponse"
import { ProviderCode } from "./ProviderCode"

export interface OrganisationSearchResponse extends OrganisationResponse {
	realm?: OrganisationRealm | OrganisationRealm[]
	credentials?: Partial<Record<ProviderCode, Record<string, any>>>
	organisationConfig?: OrganisationConfig
	internalOrganisationConfig?: InternalOrganisationConfig
	cardTypes?: Partial<Record<ProviderCode, ActiveCardType>>
}

export namespace OrganisationSearchResponse {
	export const type = OrganisationResponse.type.extend<OrganisationSearchResponse>({
		realm: isly.union(OrganisationRealm.type, isly.array(OrganisationRealm.type)).optional(),
		credentials: isly.record(isly.fromIs("ProviderCode", ProviderCode.is), isly.any()).optional(),
		organisationConfig: isly.fromIs("OrganisationConfig", OrganisationConfig.is).optional(),
		internalOrganisationConfig: isly.fromIs("InternalOrganisationConfig", InternalOrganisationConfig.is).optional(),
		cardTypes: isly
			.record(isly.fromIs("ProviderCode", ProviderCode.is), isly.fromIs("ActiveCardType", AccountType.is))
			.optional(),
	})
	export const is = type.is
}
