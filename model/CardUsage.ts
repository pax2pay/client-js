import { isly } from "isly"

export type CardUsage = typeof CardUsage.types[number]

export namespace CardUsage {
	export const types = ["SINGLE_USE", "MULTIPLE_USE", "SINGLE_USE_ALLOW_TEST_AUTH"] as const
	export const type = isly.string<CardUsage>(types)
	export const is = type.is
}
