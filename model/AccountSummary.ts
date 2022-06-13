import * as isoly from "isoly"
import { AccountBankResponse } from "./AccountBankResponse"
import { AccountIdentifierResponse } from "./AccountIdentifierResponse"
import { AccountState } from "./AccountState"
import { AccountType } from "./AccountType"
import { FundingLimitResponse } from "./FundingLimitResponse"
import { OrganisationResponse } from "./OrganisationResponse"
import { ProviderCode } from "./ProviderCode"

export interface AccountSummary {
	providerAccountId: string
	providerCode: ProviderCode
	accountType: AccountType
	createdOn: isoly.DateTime
	createdBy: string
	state: AccountState
	friendlyName: string
	accountBankDetails?: AccountBankResponse
	organisation: OrganisationResponse
	currency: isoly.Currency
	balance: number
	pendingBalance: number
	totalCardAvailableBalance: number
	lastUpdatedCardBalanceOn?: isoly.DateTime
	fundingLimit?: FundingLimitResponse
	accountIdentifierResponse?: AccountIdentifierResponse
}

export namespace AccountSummary {
	export function is(value: AccountSummary | any): value is AccountSummary {
		return (
			typeof value == "object" &&
			typeof value.providerAccountId == "string" &&
			ProviderCode.is(value.providerCode) &&
			AccountType.is(value.accountType) &&
			isoly.DateTime.is(value.createdOn) &&
			typeof value.createdBy == "string" &&
			AccountState.is(value.state) &&
			typeof value.friendlyName == "string" &&
			(value.accountBankDetails == undefined || AccountBankResponse.is(value.accountBankDetails)) &&
			OrganisationResponse.is(value.organisation) &&
			isoly.Currency.is(value.currency) &&
			typeof value.balance == "number" &&
			typeof value.pendingBalance == "number" &&
			typeof value.totalCardAvailableBalance == "number" &&
			(value.lastUpdatedCardBalanceOn == undefined || isoly.DateTime.is(value.lastUpdatedCardBalanceOn)) &&
			(value.fundingLimit == undefined || FundingLimitResponse.is(value.fundingLimit)) &&
			(value.accountIdentifierResponse == undefined || AccountIdentifierResponse.is(value.accountIdentifierResponse))
		)
	}
}
