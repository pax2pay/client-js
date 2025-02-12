import { DateTime } from "isoly"
import { isly } from "isly"
import { CardTypeInformation } from "./CardTypeInformation"
import { InternalOrganisationConfig } from "./InternalOrganisationConfig"
import { OrganisationConfig } from "./OrganisationConfig"
import { OrganisationFlag } from "./OrganisationFlag"
import { OrganisationRealm } from "./OrganisationRealm"
import { OrganisationStatusV2 } from "./OrganisationStatusV2"
import { ProviderCode } from "./ProviderCode"

export interface OrganisationSearchResponse {
	code: string
	name: string
	status: OrganisationStatusV2
	realm?: OrganisationRealm | OrganisationRealm[]
	credentials?: Partial<Record<ProviderCode, Record<string, any>>>
	organisationConfig?: OrganisationConfig
	internalOrganisationConfig?: InternalOrganisationConfig
	cardTypes?: Partial<Record<ProviderCode, CardTypeInformation>>
	createdOn: DateTime
	channelPartners?: OrganisationFlag[]
}

export namespace OrganisationSearchResponse {
	export const type = isly.object<OrganisationSearchResponse>({
		code: isly.string(),
		name: isly.string(),
		status: OrganisationStatusV2.type,
		realm: isly.union(OrganisationRealm.type, isly.array(OrganisationRealm.type)).optional(),
		credentials: isly.record(ProviderCode.type, isly.any()).optional(),
		organisationConfig: isly.fromIs("OrganisationConfig", OrganisationConfig.is).optional(),
		internalOrganisationConfig: isly.fromIs("InternalOrganisationConfig", InternalOrganisationConfig.is).optional(),
		cardTypes: isly.record(ProviderCode.type, isly.fromIs("CardTypeInformation", CardTypeInformation.is)).optional(),
		createdOn: isly.fromIs("DateTime", DateTime.is),
		channelPartners: isly.array(OrganisationFlag.type).optional(),
	})
	export const is = type.is
}
