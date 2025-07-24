import { isly } from "isly"
import { Limit } from "./Limit"
import { ProviderCode } from "./ProviderCode"

export interface FundingLimitConfig {
	type: "ON_THRESHOLD" | "TIMED_ONLY" | "ON_THRESHOLD_AND_TIMED"
	limits?: Partial<Record<ProviderCode, Record<string, Limit>>>
}
export namespace FundingLimitConfig {
	export const type = isly.object<FundingLimitConfig>({
		type: isly.string(["ON_THRESHOLD", "TIMED_ONLY", "ON_THRESHOLD_AND_TIMED"]),
		limits: isly.record(ProviderCode.type, isly.record(isly.string(), Limit.type)).optional(),
	})
	export const is = type.is
}
