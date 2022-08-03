const notificationType = ["ON_THRESHOLD", "TIMED_ONLY", "ON_THRESHOLD_AND_TIMED"] as const
export type NotificationType = typeof notificationType[number]

export namespace NotificationType {
	export function is(value: unknown): value is NotificationType {
		return typeof value == "string" && notificationType.includes(value as NotificationType)
	}
}
