import { CardStateChangeDesiredState } from "./CardStateChangeDesiredState"
import { ScheduledTaskResponse } from "./ScheduledTaskResponse"

export interface CardStateChangeScheduledTaskResponse extends ScheduledTaskResponse {
	taskType: "CARD_STATE_CHANGE"
	desiredState: CardStateChangeDesiredState
}

export namespace CardStateChangeScheduledTaskResponse {
	export function is(value: CardStateChangeScheduledTaskResponse | any): value is CardStateChangeScheduledTaskResponse {
		return (
			typeof value == "object" &&
			value.taskType == "CARD_STATE_CHANGE" &&
			CardStateChangeDesiredState.is(value.desiredState)
		)
	}
}
