const cardScheduleTaskType = ["CARD_AMENDMENT", "CARD_STATE_CHANGE"] as const
export type CardScheduleTaskType = typeof cardScheduleTaskType[number]

export namespace CardScheduleTaskType {
	export function is(value: unknown): value is CardScheduleTaskType {
		return typeof value == "string" && cardScheduleTaskType.includes(value as CardScheduleTaskType)
	}
}
