import * as isoly from "isoly"
import { OrganisationResponse } from "../Organisation/OrganisationResponse"
import { ProviderResponse } from "../Provider/ProviderResponse"
import { AccountState } from "./AccountState"

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
