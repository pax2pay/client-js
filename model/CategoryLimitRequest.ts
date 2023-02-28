import { CategoryFundingAccountAccessRequest } from "./CategoryFundingAccountAccessRequest"
import { UserLimitsRequest } from "./UserLimitsRequest"

export interface CategoryLimitRequest {
	limits?: UserLimitsRequest[]
	addLimits?: UserLimitsRequest[]
	removeLimits?: UserLimitsRequest[]
	fundingAccountAccess?: CategoryFundingAccountAccessRequest
	removeFundingAccountAccess?: boolean
}
