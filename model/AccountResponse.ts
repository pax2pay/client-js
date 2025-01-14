import * as isoly from "isoly"
import { AccountType } from "./AccountType"
import { CardState } from "./CardState"
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
	currency: isoly.Currency
	state: CardState
	friendlyName: string
	balance: number
	actualBalance?: number
	accountType: AccountType
	fundingLimit?: FundingLimitResponse
	updatedOn: string
	createdOn?: string
}

export namespace AccountResponse {
	export function is(value: AccountResponse | any): value is AccountResponse {
		return (
			typeof value == "object" &&
			typeof value.id == "number" &&
			typeof value.providerAccountId == "string" &&
			ProviderResponse.is(value.provider) &&
			OrganisationResponse.is(value.organisation) &&
			isoly.Currency.is(value.currency) &&
			CardState.is(value.state) &&
			typeof value.friendlyName == "string" &&
			typeof value.balance == "number" &&
			(value.actualBalance == undefined || typeof value.actualBalance == "number") &&
			AccountType.is(value.accountType) &&
			(value.fundingLimit == undefined || FundingLimitResponse.is(value.fundingLimit)) &&
			typeof value.updatedOn == "string" &&
			(value.createdOn == undefined || typeof value.createdOn == "string")
		)
	}
}
