import { AllowedMccConfig } from "./AllowedMccConfig"
import { OrganisationFlag } from "./OrganisationFlag"
import { PaxpayFeature } from "./PaxpayFeature"

export interface InternalOrganisationConfig {
	flags?: OrganisationFlag[]
	features?: PaxpayFeature[]
	allowedMccConfig?: AllowedMccConfig
}

export namespace InternalOrganisationConfig {
	export function is(value: InternalOrganisationConfig | any): value is InternalOrganisationConfig {
		return (
			typeof value == "object" &&
			(value.flags == undefined ||
				(Array.isArray(value.flags) && value.flags.every((item: any) => OrganisationFlag.is(item))))
		)
	}
}
