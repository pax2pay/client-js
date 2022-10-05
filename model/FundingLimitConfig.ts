export interface FundingLimitConfig {
	type: "ON_THRESHOLD" | "TIMED_ONLY" | "ON_THRESHOLD_AND_TIMED"
	limits?: any
}
export namespace FundingLimitConfig {
	export function is(value: FundingLimitConfig | any): value is FundingLimitConfig {
		return value.type == "ON_THRESHOLD" || value.type == "TIME_ONLY" || value.type == "ON_THRESHOLD_AND_TIMED"
	}
}
