import { Currency } from "isoly"
import { isly } from "isly"
import { Configuration as FConfiguration } from "./Configuration"
export interface FundingLimit {
	accountId: string
	threshold?: number // only unset on the managed config, meaning no threshold for this account
	currency?: Currency
	reason?: string // why the system chose this threshold; managed config only
}
export namespace FundingLimit {
	export const type = isly.object<FundingLimit>({
		accountId: isly.string(),
		threshold: isly.number().optional(),
		currency: isly.string<Currency>().optional(),
		reason: isly.string().optional(),
	})
	export const is = type.is
	export import Configuration = FConfiguration
}
