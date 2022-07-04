import * as isoly from "isoly"
import { OrganisationResponse } from "../Organisation/OrganisationResponse"
import { ProviderResponse } from "../ProviderResponse"

export interface FundingAccountSearchResponse {
	id: number
	providerAccountId: string
	provider: ProviderResponse
	organisation: OrganisationResponse
	currency: isoly.Currency
	state: "ACTIVE" | "INACTIVE" | "CLOSED" | "DELETED" | "EXPIRED" | "PENDING" | "APPROVED" | "DECLINED" | "GENERATED"
	friendlyName: string
	balance: number
	accountType: "FUNDING" | "CARD"
	updatedOn: isoly.Date
	createdOn: isoly.Date
}
