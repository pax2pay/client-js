import { CardAmendmentScheduledTaskResponse } from "./CardAmendmentScheduledTaskResponse"
import { CardStateChangeScheduledTaskResponse } from "./CardStateChangeScheduledTaskResponse"

export type CardScheduleResponseItem = CardAmendmentScheduledTaskResponse | CardStateChangeScheduledTaskResponse
export namespace CardScheduleResponseItem {
	export function is(value: CardScheduleResponseItem | any): value is CardScheduleResponseItem {
		return (
			typeof value == "object" &&
			(CardAmendmentScheduledTaskResponse.is(value) || CardStateChangeScheduledTaskResponse.is(value))
		)
	}
}
