import { Currency } from "isoly"
import { isly } from "isly"
import { FundingLimit } from "../FundingLimit"
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
export interface Configuration {
	accounts?: AccountLimit[]
	type: FundingLimit.NoticeTriggerType
}

export namespace Configuration {
	export const type = isly.object<Configuration>({
		accounts: AccountLimit.type.array().optional(),
		type: FundingLimit.NoticeTriggerType.type,
	})
	export const is = type.is
}
