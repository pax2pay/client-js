import { Currency } from "isoly"
import { isly } from "isly"
import { Configuration as FConfiguration } from "./Configuration"
export interface FundingLimit {
	accountId: string
	threshold: number
	currency: Currency
}
export namespace FundingLimit {
	export const type = isly.object<FundingLimit>({
		accountId: isly.string(),
		threshold: isly.number(),
		currency: isly.string<Currency>(),
	})
	export const is = type.is
	export import Configuration = FConfiguration
}
