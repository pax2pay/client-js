const scheduledTaskStatus = [
	"TODO",
	"CANCELLED",
	"CANCELLED_EXCEPTIONALLY",
	"SUCCESSFUL",
	"FAILED",
	"FAILED_EXCEPTIONALLY",
	"HALTED",
	"PENDING",
	"PENDING_DECLINED",
] as const

export type ScheduledTaskStatus = typeof scheduledTaskStatus[number]

export namespace ScheduledTaskStatus {
	export function is(value: unknown): value is ScheduledTaskStatus {
		return typeof value == "string" && scheduledTaskStatus.includes(value as ScheduledTaskStatus)
	}
}
