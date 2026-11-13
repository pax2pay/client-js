import { isly } from "isly"
import { FundingLimit } from "."
import { NoticeTriggerType } from "./NoticeTriggerType"

export interface Configuration {
	accounts: FundingLimit[]
	type?: NoticeTriggerType
	managed?: boolean // unset: user-created; true/false: the org's managed config, on/off (system-written nightly)
}
export namespace Configuration {
	export const type = isly.object<Configuration>({
		accounts: FundingLimit.type.array(),
		type: NoticeTriggerType.type.optional(),
		managed: isly.boolean().optional(),
	})
	export const is = type.is
}
