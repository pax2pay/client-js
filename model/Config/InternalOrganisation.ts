import { isly } from "isly"
import { OrganisationFlag } from "../OrganisationFlag"
import { PaxpayFeature } from "../PaxpayFeature"
import { TierID } from "../TierID"
import { FundingLimit } from "./FundingLimit"

// InternalOrganisationConfig
export interface InternalOrganisation {
	flags?: OrganisationFlag[]
	features?: PaxpayFeature[]
	fundingLimitConfig?: FundingLimit
	tier?: TierID
}

export namespace InternalOrganisation {
	export const type = isly.object<InternalOrganisation>({
		flags: OrganisationFlag.type.array().optional(),
		features: PaxpayFeature.type.array().optional(),
		fundingLimitConfig: FundingLimit.type.optional(),
		tier: TierID.type.optional(),
	})
	export const is = type.is
}
