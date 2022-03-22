const cardScheduleTaskStatus = [
	"TODO",
	"CANCELLED",
	"CANCELLED_EXCEPTIONALLY",
	"SUCCESSFUL",
	"FAILED",
	"FAILED_EXCEPTIONALLY",
	"HALTED",
	"PENDING",
	"PENDING_DECLINED",
]
export type CardScheduleTaskStatus = typeof cardScheduleTaskStatus[number]

export namespace CardScheduleTaskStatus {
	export function is(value: unknown): value is CardScheduleTaskStatus {
		return typeof value == "string" && cardScheduleTaskStatus.includes(value as CardScheduleTaskStatus)
	}
}
