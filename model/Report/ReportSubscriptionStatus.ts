import { isly } from "isly"

export type ReportSubscriptionStatus = typeof ReportSubscriptionStatus.values[number]

export namespace ReportSubscriptionStatus {
	export const values = ["ACTIVE", "DELETED"] as const
	export const type = isly.string<ReportSubscriptionStatus>(values)
	export const is = type.is
}
