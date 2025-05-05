import { isly } from "isly"
import { CardStateChangeDesiredState } from "./CardStateChangeDesiredState"
import { ScheduledTaskResponse } from "./ScheduledTaskResponse"

export interface CardStateChangeScheduledTaskResponse extends ScheduledTaskResponse {
	taskType: "CARD_STATE_CHANGE"
	desiredState: CardStateChangeDesiredState
}

export namespace CardStateChangeScheduledTaskResponse {
	export const type = ScheduledTaskResponse.type.extend<CardStateChangeScheduledTaskResponse>({
		taskType: isly.string("CARD_STATE_CHANGE"),
		desiredState: CardStateChangeDesiredState.type,
	})
	export const is = type.is
}
