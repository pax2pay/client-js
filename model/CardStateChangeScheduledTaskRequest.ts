import { CardScheduleTaskType } from "./CardScheduleTaskType"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"

export interface CardStateChangeScheduledTaskRequest extends ScheduledTaskRequest {
	taskType: CardScheduleTaskType.CARD_STATE_CHANGE
	desiredState: "CANCEL" | "FREEZE" | "THAW"
}
