import { isly } from "isly"
import { ProviderCode } from "../../ProviderCode"
import { NoticeTriggerType } from "../Notice/FundingLimit/NoticeTriggerType"
import { Limit as FLimit } from "./Limit"

// FundingLimitConfig
export interface FundingLimit {
	type: NoticeTriggerType
	limits?: Partial<Record<ProviderCode, Record<string, FLimit>>>
}
export namespace FundingLimit {
	export const type = isly.object<FundingLimit>({
		type: NoticeTriggerType.type,
		limits: isly.record(ProviderCode.type, isly.record(isly.string(), FLimit.type)).optional(),
	})
	export const is = type.is

	export import Limit = FLimit
}
