import { NotificationType } from "./NotificationType"

export interface FundingLimitConfig {
	type: NotificationType
	limits?: any //TODO better type and type check
}

export namespace FundingLimitConfig {
	export function is(value: FundingLimitConfig | any): value is FundingLimitConfig {
		return typeof value == "object" && NotificationType.is(value.type)
	}
}
