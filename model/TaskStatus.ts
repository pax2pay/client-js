export type TaskStatus = typeof TaskStatus.values[number]

export namespace TaskStatus {
	export const values = [
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
	export function is(value: unknown): value is TaskStatus {
		return typeof value == "string" && values.includes(value as TaskStatus)
	}
}
