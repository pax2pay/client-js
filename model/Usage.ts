import { isly } from "isly"

export type Usage = typeof Usage.values[number]

export namespace Usage {
	export const values = ["SINGLE_USE", "MULTIPLE_USE", "SINGLE_USE_ALLOW_TEST_AUTH"] as const
	export const type = isly.string<Usage>(values)
	export const is = type.is
}
