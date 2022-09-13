import { CategoryFundingAccountAccessRequest } from "./CategoryFundingAccountAccessRequest"
import { CategoryLimitResponse } from "./CategoryLimitResponse"
import { CategoryStatus } from "./CategoryStatus"

export interface CategoryResponse {
	name: string
	limits: CategoryLimitResponse[]
	status: CategoryStatus
	fundingAccountAccess: CategoryFundingAccountAccessRequest
}
