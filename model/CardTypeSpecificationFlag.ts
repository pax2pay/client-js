import { isly } from "isly"

export type CardTypeSpecificationFlag = typeof CardTypeSpecificationFlag.types[number]

export namespace CardTypeSpecificationFlag {
	export const types = ["CORPORATE", "BUSINESS", "CONSUMER"] as const
	export const type = isly.string(types)
	export const is = type.is
}
