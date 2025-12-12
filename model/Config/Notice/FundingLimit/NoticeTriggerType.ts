import { isly } from "isly"

export type NoticeTriggerType = typeof NoticeTriggerType.values[number]

export namespace NoticeTriggerType {
	export const values = ["ON_THRESHOLD", "TIMED_ONLY", "ON_THRESHOLD_AND_TIMED"] as const
	export const type = isly.string(values)
	export const is = type.is
}
