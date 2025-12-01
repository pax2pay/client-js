import { DateTime } from "isoly"
import { isly } from "isly"
import { CardTypeInformation } from "./CardTypeInformation"
import { Config } from "./Config"
import { InternalOrganisation } from "./Config/InternalOrganisation"
import { OrganisationFlag } from "./OrganisationFlag"
import { OrganisationRealm } from "./OrganisationRealm"
import { OrganisationStatusV2 } from "./OrganisationStatusV2"
import { ProviderCode } from "./ProviderCode"

export interface OrganisationResponseV2 {
	code: string
	name: string
	status: OrganisationStatusV2
	realm?: OrganisationRealm | OrganisationRealm[]
	credentials?: Partial<Record<ProviderCode, Record<string, any>>>
	organisationConfig?: Config.Organisation
	internalOrganisationConfig?: InternalOrganisation
	cardTypes?: Partial<Record<ProviderCode, CardTypeInformation>>
	createdOn: DateTime
	channelPartners?: OrganisationFlag[]
}

export namespace OrganisationResponseV2 {
	export const type = isly.object<OrganisationResponseV2>({
		code: isly.string(),
		name: isly.string(),
		status: OrganisationStatusV2.type,
		realm: isly.union(OrganisationRealm.type, isly.array(OrganisationRealm.type)).optional(),
		credentials: isly.record(ProviderCode.type, isly.any()).optional(),
		organisationConfig: isly.fromIs("OrganisationConfig", Config.Organisation.is).optional(),
		internalOrganisationConfig: isly.fromIs("InternalOrganisationConfig", InternalOrganisation.is).optional(),
		cardTypes: isly.record(ProviderCode.type, isly.fromIs("CardTypeInformation", CardTypeInformation.is)).optional(),
		createdOn: isly.fromIs("DateTime", DateTime.is),
		channelPartners: isly.array(OrganisationFlag.type).optional(),
	})
	export const is = type.is
}
