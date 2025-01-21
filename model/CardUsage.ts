import { isly } from "isly"
import { Usage } from "./Usage"

export type CardUsage = typeof CardUsage.values[number]

export namespace CardUsage {
	export const values = ["single", "multiple", "single allow test auth"] as const
	export const type = isly.string<CardUsage>(values)
	export const is = type.is
	export function toUsage(value: CardUsage): Usage {
		return (
			{
				single: "SINGLE_USE",
				multiple: "MULTIPLE_USE",
				"single allow test auth": "SINGLE_USE_ALLOW_TEST_AUTH",
			} as const
		)[value]
	}
	export function fromUsage(value: Usage): CardUsage {
		return (
			{
				SINGLE_USE: "single",
				MULTIPLE_USE: "multiple",
				SINGLE_USE_ALLOW_TEST_AUTH: "single allow test auth",
			} as const
		)[value]
	}
}
