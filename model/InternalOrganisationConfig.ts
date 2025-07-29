import { isly } from "isly"
import { AllowedMccConfig } from "./AllowedMccConfig"
import { FundingLimitConfig } from "./FundingLimitConfig"
import { OrganisationFlag } from "./OrganisationFlag"
import { PaxpayFeature } from "./PaxpayFeature"
import { TierID } from "./TierID"

export interface InternalOrganisationConfig {
	flags?: OrganisationFlag[]
	features?: PaxpayFeature[]
	allowedMccConfig?: AllowedMccConfig
	fundingLimitConfig?: FundingLimitConfig
	tier?: TierID
}

export namespace InternalOrganisationConfig {
	export const type = isly.object<InternalOrganisationConfig>({
		flags: OrganisationFlag.type.array().optional(),
		features: PaxpayFeature.type.array().optional(),
		allowedMccConfig: AllowedMccConfig.type.optional(),
		fundingLimitConfig: FundingLimitConfig.type.optional(),
		tier: TierID.type.optional(),
	})
	export const is = type.is
}
