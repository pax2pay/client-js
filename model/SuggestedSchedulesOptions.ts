import { ScheduledTaskRequest } from "./ScheduledTaskRequest"
import { SuggestedOptions } from "./SuggestedOptions"

export interface SuggestedSchedulesOptions {
	requirement: "suggested" | "required" | "none"
	schedules: SuggestedOptions<ScheduledTaskRequest[]>
}
