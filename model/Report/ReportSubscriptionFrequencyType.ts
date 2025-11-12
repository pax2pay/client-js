import { isly } from "isly"

export type ReportSubscriptionFrequencyType = typeof ReportSubscriptionFrequencyType.values[number]

export namespace ReportSubscriptionFrequencyType {
	export const values = ["DAILY", "WEEKLY", "MONTHLY"] as const
	export const type = isly.string<ReportSubscriptionFrequencyType>(values)
	export const is = type.is
}
