import { isly } from "isly"
import { OrganisationFlag } from "../OrganisationFlag"
import { PaxpayFeature } from "../PaxpayFeature"
import { TierID } from "../TierID"
import { Types } from "./Types"

export interface InternalOrganisation {
	flags?: OrganisationFlag[]
	features?: PaxpayFeature[]
	allowedMccConfig?: Types.AllowedMcc
	fundingLimitConfig?: Types.FundingLimit
	tier?: TierID
}

export namespace InternalOrganisation {
	export const type = isly.object<InternalOrganisation>({
		flags: OrganisationFlag.type.array().optional(),
		features: PaxpayFeature.type.array().optional(),
		allowedMccConfig: Types.AllowedMcc.type.optional(),
		fundingLimitConfig: Types.FundingLimit.type.optional(),
		tier: TierID.type.optional(),
	})
	export const is = type.is
}
