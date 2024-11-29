import { isly } from "isly"

export interface FundingLimitConfig {
	type: "ON_THRESHOLD" | "TIMED_ONLY" | "ON_THRESHOLD_AND_TIMED"
	limits?: any
}
export namespace FundingLimitConfig {
	export const type = isly.object<FundingLimitConfig>({
		type: isly.string(["ON_THRESHOLD", "TIMED_ONLY", "ON_THRESHOLD_AND_TIMED"]),
		limits: isly.any().optional(),
	})
	export const is = type.is
}
