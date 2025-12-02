import { Currency } from "isoly"
import { isly } from "isly"

// FundingLimitNoticeConfiguration
export interface FundingLimit {
	accounts?: FundingLimit.AccountLimit[]
}

export namespace FundingLimit {
	export const type = isly.object<FundingLimit>({
		accounts: FundingLimit.AccountLimit.type.array().optional(),
	})
	export const is = type.is

	export interface AccountLimit {
		accountId: string
		threshold: number
		currency?: Currency
	}
	export namespace AccountLimit {
		export const type = isly.object<AccountLimit>({
			accountId: isly.string(),
			threshold: isly.number(),
			currency: isly.string<Currency>().optional(),
		})
		export const is = type.is
	}
}
