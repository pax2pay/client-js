import { isly } from "isly"
import { Usage } from "./Usage"

export type CardUsage = typeof CardUsage.values[number]

export namespace CardUsage {
	export const values = ["single", "single allow test auth", "multiple", "scheduled"] as const
	export const type = isly.string<CardUsage>(values)
	export const is = type.is
	export function toUsage(value: CardUsage): Usage {
		return (
			{
				single: "SINGLE_USE",
				"single allow test auth": "SINGLE_USE_ALLOW_TEST_AUTH",
				multiple: "MULTIPLE_USE",
				scheduled: "SCHEDULED_USE",
			} as const
		)[value]
	}
	export function fromUsage(value: Usage): CardUsage {
		return (
			{
				SINGLE_USE: "single",
				SINGLE_USE_ALLOW_TEST_AUTH: "single allow test auth",
				MULTIPLE_USE: "multiple",
				SCHEDULED_USE: "scheduled",
			} as const
		)[value]
	}
}
