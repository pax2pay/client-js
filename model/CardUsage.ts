import { isly } from "isly"

export type CardUsage = typeof CardUsage.values[number]

export namespace CardUsage {
	export const values = ["SINGLE_USE", "MULTIPLE_USE", "SINGLE_USE_ALLOW_TEST_AUTH"] as const
	export const type = isly.string(values)
	export const is = type.is
}
