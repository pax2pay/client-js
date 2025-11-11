import { isly } from "isly"

export type ReportSubscriptionInvocationOutcome = typeof ReportSubscriptionInvocationOutcome.values[number]

export namespace ReportSubscriptionInvocationOutcome {
	export const values = ["SUCCESS", "FAILURE"] as const
	export const type = isly.string<ReportSubscriptionInvocationOutcome>(values)
	export const is = type.is
}
