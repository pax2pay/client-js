import { Currency } from "isoly"
import { isly } from "isly"
import { TransferDestinationAddressType } from "./TransferDestinationAddressType"

export interface FundingAccountSummaryResponse {
	providerAccountId: string
	accountId: string
	balance: number
	friendlyName: string
	currency: Currency
	type: TransferDestinationAddressType
}

export namespace FundingAccountSummaryResponse {
	export const type = isly.object<FundingAccountSummaryResponse>({
		providerAccountId: isly.string(),
		accountId: isly.string(),
		balance: isly.number(),
		friendlyName: isly.string(),
		currency: isly.fromIs("Currency", Currency.is),
		type: TransferDestinationAddressType.type,
	})
	export const is = type.is
}
