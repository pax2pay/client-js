import { CardStateChangeDesiredState } from "./CardStateChangeDesiredState"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"

export interface CardStateChangeScheduledTaskRequest extends ScheduledTaskRequest {
	taskType: "CARD_STATE_CHANGE"
	desiredState: CardStateChangeDesiredState
}

export namespace CardStateChangeScheduledTaskRequest {
	export function is(value: CardStateChangeScheduledTaskRequest | any): value is CardStateChangeScheduledTaskRequest {
		return (
			typeof value == "object" &&
			value.taskType == "CARD_STATE_CHANGE" &&
			CardStateChangeDesiredState.is(value.desiredState)
		)
	}
}
