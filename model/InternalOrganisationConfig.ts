import { AllowedMccConfig } from "./AllowedMccConfig"
import { OrganisationBalanceLimitResponse } from "./OrganisationBalanceLimitResponse"
import { OrganisationFlag } from "./OrganisationFlag"
import { PaxpayFeature } from "./PaxpayFeature"

export interface InternalOrganisationConfig {
	flags: OrganisationFlag
	internalBalanceLimit: OrganisationBalanceLimitResponse
	features: PaxpayFeature[]
	allowedMccConfig: AllowedMccConfig
	statementAppned: boolean
	statementRebuild: boolean
}
