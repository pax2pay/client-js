import { Currency } from "isoly"
import { isly } from "isly"
import { CardState } from "./CardState"
import { ProviderCode } from "./ProviderCode"

export interface FundingAccountResponseV2Basic {
	friendlyName?: string
	id: string
	providerAccountId: string
	providerCode: ProviderCode
	status: CardState
	currency: Currency
	balance: number
}
export namespace FundingAccountResponseV2Basic {
	export const type = isly.object<FundingAccountResponseV2Basic>({
		friendlyName: isly.string().optional(),
		id: isly.string(),
		providerAccountId: isly.string(),
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		status: CardState.type,
		currency: isly.fromIs("Currency", Currency.is),
		balance: isly.number(),
	})
	export const is = type.is
}
