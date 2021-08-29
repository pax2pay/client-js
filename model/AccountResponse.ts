import { FundingLimitResponse } from "./FundingLimitResponse"
import { OrganisationResponse } from "./OrganisationResponse"
import { ProviderResponse } from "./ProviderResponse"
/**
 * The funding accounts created
 */
export interface AccountResponse {
	id: number
	providerAccountId: string
	provider: ProviderResponse
	organisation: OrganisationResponse
	currency: string
	state: "ACTIVE" | "INACTIVE" | "CLOSED" | "DELETED" | "EXPIRED" | "PENDING" | "APPROVED" | "DECLINED" | "GENERATED"
	friendlyName: string
	balance: number
	actualBalance?: number
	accountType: "FUNDING" | "CARD"
	fundingLimit?: FundingLimitResponse
	updatedOn: string
	createdOn: string
}
