import { FundingLimitRequest } from "../Account/FundingLimitRequest"
import { ProviderCode } from "../Provider/ProviderCode"
import { NotificationType } from "./NotificationType"

export interface FundingLimitConfig {
	type: NotificationType
	limits?: Map<ProviderCode, Map<string, FundingLimitRequest>>
}

export namespace FundingLimitConfig {
	export function is(value: FundingLimitConfig | any): value is FundingLimitConfig {
		return (
			typeof value == "object" &&
			NotificationType.is(value.type) &&
			(value.limits == undefined ||
				(value.limits instanceof Map &&
					[...value.limits.keys()].every((item: any) => ProviderCode.is(item)) &&
					[...value.limits.values()].every(
						(item: any) =>
							item instanceof Map &&
							[...item.keys()].every((itemKey: any) => typeof itemKey == "string") &&
							[...item.values()].every((itemValue: any) => FundingLimitRequest.is(itemValue))
					)))
		)
	}
}
