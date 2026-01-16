import { DateTime } from "isoly"
import { isly } from "isly"
import { CardTypeInformation } from "../CardTypeInformation"
import { Config } from "../Config"
import { OrganisationFlag } from "../OrganisationFlag"
import { OrganisationRealm } from "../OrganisationRealm"
import { OrganisationStatusV2 } from "../OrganisationStatusV2"
import { ProviderCode } from "../ProviderCode"
import { Credentials as OCredentials } from "./Credentials"

export interface OrganisationResponseV2 {
	code: string
	name: string
	status: OrganisationStatusV2
	realm?: OrganisationRealm | OrganisationRealm[]
	credentials?: OCredentials
	organisationConfig?: Config.Organisation
	internalOrganisationConfig?: Config.InternalOrganisation
	cardTypes?: Partial<Record<ProviderCode, CardTypeInformation>>
	createdOn: DateTime
	channelPartners?: OrganisationFlag[]
}

export namespace OrganisationResponseV2 {
	export import Credentials = OCredentials

	export const type = isly.object<OrganisationResponseV2>({
		code: isly.string(),
		name: isly.string(),
		status: OrganisationStatusV2.type,
		realm: isly.union(OrganisationRealm.type, isly.array(OrganisationRealm.type)).optional(),
		credentials: OCredentials.type.optional(),
		organisationConfig: isly.fromIs("Config.Organisation", Config.Organisation.is).optional(),
		internalOrganisationConfig: isly.fromIs("Config.InternalOrganisation", Config.InternalOrganisation.is).optional(),
		cardTypes: isly.record(ProviderCode.type, isly.fromIs("CardTypeInformation", CardTypeInformation.is)).optional(),
		createdOn: isly.fromIs("DateTime", DateTime.is),
		channelPartners: isly.array(OrganisationFlag.type).optional(),
	})
	export const is = type.is
}
