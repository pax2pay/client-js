import { Currency } from "isoly"
import { isly } from "isly"
import { AccountState } from "./AccountState"
import { ProviderCode } from "./ProviderCode"

export interface FundingAccountResponseV2Basic {
	friendlyName?: string
	id: string
	providerAccountId: string
	providerCode: ProviderCode
	status: AccountState
	currency: Currency
	balance: number
}
export namespace FundingAccountResponseV2Basic {
	export const type = isly.object<FundingAccountResponseV2Basic>({
		friendlyName: isly.string().optional(),
		id: isly.string(),
		providerAccountId: isly.string(),
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		status: isly.fromIs("AccountState", AccountState.is),
		currency: isly.fromIs("Currency", Currency.is),
		balance: isly.number(),
	})
	export const is = type.is
}
