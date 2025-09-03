import * as isoly from "isoly"
import { CardState, ProviderResponse } from "."
import { OrganisationResponse } from "./OrganisationResponse"
/**
 * Funding account information
 */
export interface CardFundingAccountResponse {
	id: number
	providerAccountId: string
	provider: ProviderResponse
	organisation: OrganisationResponse
	currency: isoly.Currency
	state: CardState
	friendlyName: string
	balance: number
	accountType: "FUNDING" | "CARD"
	updatedOn: isoly.Date
	createdOn: isoly.Date
}

export namespace CardFundingAccountResponse {
	export function is(value: CardFundingAccountResponse | any): value is CardFundingAccountResponse {
		return (
			typeof value == "object" &&
			typeof value.id == "number" &&
			typeof value.providerAccountId == "string" &&
			ProviderResponse.is(value.provider) &&
			OrganisationResponse.is(value.organisation) &&
			isoly.Currency.is(value.currency) &&
			(value.state == "ACTIVE" ||
				value.state == "INACTIVE" ||
				value.state == "CLOSED" ||
				value.state == "DELETED" ||
				value.state == "EXPIRED" ||
				value.state == "PENDING" ||
				value.state == "APPROVED" ||
				value.state == "DECLINED" ||
				value.state == "GENERATED") &&
			typeof value.friendlyName == "string" &&
			typeof value.balance == "number" &&
			(value.accountType == "FUNDING" || value.accountType == "CARD") &&
			isoly.Date.is(value.updatedOn) &&
			isoly.Date.is(value.createdOn)
		)
	}
}
