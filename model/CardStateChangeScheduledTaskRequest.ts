import { CardScheduleTaskType } from "./CardScheduleTaskType"
import { CardStateChangeDesiredState } from "./CardStateChangeDesiredState"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"

export interface CardStateChangeScheduledTaskRequest extends ScheduledTaskRequest {
	taskType: CardScheduleTaskType.CARD_STATE_CHANGE
	desiredState: CardStateChangeDesiredState
}
