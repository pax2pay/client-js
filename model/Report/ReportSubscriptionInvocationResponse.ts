import { DateTime } from "isoly"
import { isly } from "isly"
import { ReportSubscriptionInvocationOutcome } from "./ReportSubscriptionInvocationOutcome"

export interface ReportSubscriptionInvocationResponse {
	id?: string
	createdAt: DateTime
	outcome: ReportSubscriptionInvocationOutcome
	errorMessage?: string
}
export namespace ReportSubscriptionInvocationResponse {
	export const type = isly.object<ReportSubscriptionInvocationResponse>({
		id: isly.string().optional(),
		createdAt: isly.fromIs("DateTime", DateTime.is),
		outcome: ReportSubscriptionInvocationOutcome.type,
		errorMessage: isly.string().optional(),
	})
	export const is = type.is
}
