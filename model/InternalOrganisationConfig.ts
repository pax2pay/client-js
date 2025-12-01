import { isly } from "isly"
import { AllowedMccConfig } from "./AllowedMccConfig"
import { FundingLimit } from "./Config/Types/FundingLimit"
import { OrganisationFlag } from "./OrganisationFlag"
import { PaxpayFeature } from "./PaxpayFeature"
import { TierID } from "./TierID"

export interface InternalOrganisationConfig {
	flags?: OrganisationFlag[]
	features?: PaxpayFeature[]
	allowedMccConfig?: AllowedMccConfig
	fundingLimitConfig?: FundingLimit
	tier?: TierID
}

export namespace InternalOrganisationConfig {
	export const type = isly.object<InternalOrganisationConfig>({
		flags: OrganisationFlag.type.array().optional(),
		features: PaxpayFeature.type.array().optional(),
		allowedMccConfig: AllowedMccConfig.type.optional(),
		fundingLimitConfig: FundingLimit.type.optional(),
		tier: TierID.type.optional(),
	})
	export const is = type.is
}
