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

export namespace FundingAccountSearchResponse {
	export function is(value: FundingAccountSearchResponse | any): value is FundingAccountSearchResponse {
		return (
			typeof value == "object" &&
			typeof value.id == "number" &&
			typeof value.providerAccountId == "string" &&
			ProviderResponse.is(value.provider) &&
			OrganisationResponse.is(value.organisation) &&
			isoly.Currency.is(value.currency) &&
			AccountState.is(value.state) &&
			typeof value.friendlyName == "string" &&
			typeof value.balance == "number" &&
			(value.accountType == "FUNDING" || value.accountType == "CARD") &&
			isoly.Date.is(value.updatedOn) &&
			isoly.Date.is(value.createdOn)
		)
	}
}
