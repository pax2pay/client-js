import { Currency } from "isoly"
import { AccountState } from "./AccountState"
import { ProviderCode } from "./ProviderCode"

export interface FundingAccountResponseV2Basic {
	friendlyName?: string
	providerAccountId: string
	providerCode: ProviderCode
	status: AccountState
	currency: Currency
	balance: number
}
export namespace FundingAccountResponseV2Basic {
	export function is(value: FundingAccountResponseV2Basic | any): value is FundingAccountResponseV2Basic {
		return (
			typeof value == "object" &&
			(value.friendlyName == undefined || typeof value.friendlyName == "string") &&
			typeof value.providerAccountId == "string" &&
			ProviderCode.is(value.providerCode) &&
			AccountState.is(value.status) &&
			Currency.is(value.currency) &&
			typeof value.balance == "number"
		)
	}
}
