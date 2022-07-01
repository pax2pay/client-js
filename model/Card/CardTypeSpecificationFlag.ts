const cardTypeSpecificationFlags = ["CORPORATE", "BUSINESS", "CONSUMER"] as const
export type CardTypeSpecificationFlag = typeof cardTypeSpecificationFlags[number]

export namespace CardTypeSpecificationFlag {
	export function is(value: unknown): value is CardTypeSpecificationFlag {
		return value == "string" && cardTypeSpecificationFlags.includes(value as CardTypeSpecificationFlag)
	}
}
