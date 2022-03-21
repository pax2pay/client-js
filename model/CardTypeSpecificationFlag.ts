export type CardTypeSpecificationFlag = "CORPORATE" | "BUSINESS" | "CONSUMER"

export namespace CardTypeSpecificationFlag {
	export function is(value: CardTypeSpecificationFlag | any): value is CardTypeSpecificationFlag {
		return value == "CORPORATE" || value == "BUSINESS" || value == "CONSUMER"
	}
}
