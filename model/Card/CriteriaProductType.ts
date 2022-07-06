const criteriaProductType = [
	"FLIGHT",
	"ACCOMMODATION",
	"ANY",
	"CAR_PARKING",
	"CAR_HIRE",
	"TRANSFER",
	"INSURANCE",
	"PACKAGE",
	"RAIL",
	"CRUISE",
	"ATTRACTION",
	"BAGGAGE_TRACKING",
] as const

export type CriteriaProductType = typeof criteriaProductType[number]

export namespace CriteriaProductType {
	export function is(value: CriteriaProductType | any): value is CriteriaProductType {
		return typeof value == "string" && criteriaProductType.includes(value as CriteriaProductType)
	}
}
