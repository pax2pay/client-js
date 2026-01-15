import { DateTime } from "isoly"
import { isly } from "isly"
import { CardTypeInformation } from "./CardTypeInformation"
import { Config } from "./Config"
import { OrganisationFlag } from "./OrganisationFlag"
import { OrganisationRealm } from "./OrganisationRealm"
import { OrganisationStatusV2 } from "./OrganisationStatusV2"
import { ProviderCode } from "./ProviderCode"

export interface OrganisationResponseV2 {
	code: string
	name: string
	status: OrganisationStatusV2
	realm?: OrganisationRealm | OrganisationRealm[]
	credentials?: OrganisationResponseV2.Credentials
	organisationConfig?: Config.Organisation
	internalOrganisationConfig?: Config.InternalOrganisation
	cardTypes?: Partial<Record<ProviderCode, CardTypeInformation>>
	createdOn: DateTime
	channelPartners?: OrganisationFlag[]
}

export namespace OrganisationResponseV2 {
	export type Credentials = Partial<Record<ProviderCode, Record<string, any>>> & {
		pax2pay?: Credentials.Pax2Pay
	}
	export namespace Credentials {
		export const type = isly.record(ProviderCode.type, isly.any())

		// Pax2PayBankingCredentials in mpay
		export type Pax2Pay = {
			cardHolderName: string
			organisationId: string
		}
		export namespace Pax2Pay {
			export const keys: (keyof Pax2Pay)[] = ["cardHolderName", "organisationId"]
			export const type = isly.object<Pax2Pay>({
				cardHolderName: isly.string(),
				organisationId: isly.string(),
			})
		}
	}

	export const type = isly.object<OrganisationResponseV2>({
		code: isly.string(),
		name: isly.string(),
		status: OrganisationStatusV2.type,
		realm: isly.union(OrganisationRealm.type, isly.array(OrganisationRealm.type)).optional(),
		credentials: OrganisationResponseV2.Credentials.type.optional(),
		organisationConfig: isly.fromIs("Config.Organisation", Config.Organisation.is).optional(),
		internalOrganisationConfig: isly.fromIs("Config.InternalOrganisation", Config.InternalOrganisation.is).optional(),
		cardTypes: isly.record(ProviderCode.type, isly.fromIs("CardTypeInformation", CardTypeInformation.is)).optional(),
		createdOn: isly.fromIs("DateTime", DateTime.is),
		channelPartners: isly.array(OrganisationFlag.type).optional(),
	})
	export const is = type.is
}
