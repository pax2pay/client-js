import { isly } from "isly"
import { DayOfWeek } from "../DayOfWeek"
import { ReportSubscriptionFrequencyType } from "./ReportSubscriptionFrequencyType"

export interface ReportSubscriptionFrequencyRequest {
	type: ReportSubscriptionFrequencyType
	dayOfWeek?: DayOfWeek
	dayOfMonth?: number
}
export namespace ReportSubscriptionFrequencyRequest {
	export const type = isly.object<ReportSubscriptionFrequencyRequest>({
		type: ReportSubscriptionFrequencyType.type,
		dayOfWeek: DayOfWeek.type.optional(),
		dayOfMonth: isly.number("integer").optional(),
	})
	export const is = type.is
}
