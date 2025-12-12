import { isly } from "isly"
import { FundingLimit } from "."
import { NoticeTriggerType } from "./NoticeTriggerType"

export interface Configuration {
	accounts: FundingLimit[]
	type?: NoticeTriggerType
}

export namespace Configuration {
	export const type = isly.object<Configuration>({
		accounts: FundingLimit.type.array(),
		type: NoticeTriggerType.type.optional(),
	})
	export const is = type.is
}
