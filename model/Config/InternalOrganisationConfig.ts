import { AllowedMccConfig } from "./AllowedMccConfig"
import { InternalBalanceLimit } from "./InternalBalanceLimit"
import { OrganisationFlag } from "./OrganisationFlag"
import { PaxpayFeature } from "./PaxpayFeature"

export interface InternalOrganisationConfig {
	flags?: Set<OrganisationFlag>
	internalBalanceLimit?: InternalBalanceLimit
	features?: Set<PaxpayFeature>
	allowedMccConfig?: AllowedMccConfig
}

export namespace InternalOrganisationConfig {
	export function is(value: InternalOrganisationConfig | any): value is InternalOrganisationConfig {
		return (
			typeof value == "object" &&
			(value.flags == undefined ||
				(value.flags instanceof Set && [...value.flags.values()].every((item: any) => OrganisationFlag.is(item)))) &&
			(value.internalBalanceLimit == undefined || InternalBalanceLimit.is(value.internalBalanceLimit)) &&
			(value.features == undefined ||
				(value.features instanceof Set && [...value.features.values()].every((item: any) => PaxpayFeature.is(item))))
			//TODO add in check for AllowedMccConfig when that has a working is function
		)
	}
}
