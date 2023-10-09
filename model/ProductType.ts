const productType = [
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
export type ProductType = typeof productType[number]

export namespace ProductType {
	export function is(value: unknown): value is ProductType {
		return typeof value == "string" && productType.includes(value as ProductType)
	}
}
