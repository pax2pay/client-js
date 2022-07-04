import * as isoly from "isoly"
import { OrganisationResponse } from "../Organisation/OrganisationResponse"
import { ProviderResponse } from "../Provider/ProviderResponse"
import { AccountState } from "./AccountState"
import { AccountType } from "./AccountType"
import { FundingLimitResponse } from "./FundingLimitResponse"
/**
 * The funding accounts created
 */
export interface AccountResponse {
	id: number
	providerAccountId: string
	provider: ProviderResponse
	organisation: OrganisationResponse
	currency: isoly.Currency
	state: AccountState
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
			AccountState.is(value.state) &&
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
