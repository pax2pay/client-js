import * as isoly from "isoly"
import { AccountState, ProviderResponse } from "."
import { OrganisationResponse } from "./OrganisationResponse"

export interface FundingAccountSearchResponse {
	id: number
	providerAccountId: string
	provider: ProviderResponse
	organisation: OrganisationResponse
	currency: isoly.Currency
	state: AccountState
	friendlyName: string
	balance: number
	accountType: "FUNDING" | "CARD"
	updatedOn: isoly.Date
	createdOn: isoly.Date
}
