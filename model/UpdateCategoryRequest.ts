import { CategoryFundingAccountAccessRequest } from "./CategoryFundingAccountAccessRequest"
import { UserLimitsRequest } from "./UserLimitsRequest"

export interface UpdateCategoryRequest {
	setLimits?: UserLimitsRequest[]
	addLimits?: UserLimitsRequest[]
	removeLimits?: UserLimitsRequest[]
	fundingAccountAccess?: CategoryFundingAccountAccessRequest
	removeFundingAccountAccess?: boolean
}
