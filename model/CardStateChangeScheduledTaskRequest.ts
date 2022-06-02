import { CardStateChangeDesiredState } from "./CardStateChangeDesiredState"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"

export interface CardStateChangeScheduledTaskRequest extends ScheduledTaskRequest {
	taskType?: "CARD_STATE_CHANGE"
	desiredState?: CardStateChangeDesiredState
}
