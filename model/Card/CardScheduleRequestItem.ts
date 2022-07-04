import { CardAmendmentScheduledTaskRequest } from "./CardAmendmentScheduledTaskRequest"
import { CardStateChangeScheduledTaskRequest } from "./CardStateChangeScheduledTaskRequest"

export type CardScheduleRequestItem = CardAmendmentScheduledTaskRequest | CardStateChangeScheduledTaskRequest
export namespace CardScheduleRequestItem {
	export function is(value: CardScheduleRequestItem | any): value is CardScheduleRequestItem {
		return (
			typeof value == "object" &&
			(CardAmendmentScheduledTaskRequest.is(value) || CardStateChangeScheduledTaskRequest.is(value))
		)
	}
}
