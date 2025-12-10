import { isly } from "isly"
import { ProviderCode } from "../../ProviderCode"
import { Limit as FLimit } from "./Limit"
import { NoticeTriggerType as FNoticeTriggerType } from "./NoticeTriggerType"

// FundingLimitConfig
export interface FundingLimit {
	type: "ON_THRESHOLD" | "TIMED_ONLY" | "ON_THRESHOLD_AND_TIMED"
	limits?: Partial<Record<ProviderCode, Record<string, FLimit>>>
}
export namespace FundingLimit {
	export const type = isly.object<FundingLimit>({
		type: isly.string(["ON_THRESHOLD", "TIMED_ONLY", "ON_THRESHOLD_AND_TIMED"]),
		limits: isly.record(ProviderCode.type, isly.record(isly.string(), FLimit.type)).optional(),
	})
	export const is = type.is

	export import Limit = FLimit
	export import NoticeTriggerType = FNoticeTriggerType
}
