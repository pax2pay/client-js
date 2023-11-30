const merchantTypes = ["flight", "hotel", "any"] as const
export type MerchantType = typeof merchantTypes[number]

export namespace MerchantType {
	export function is(value: unknown): value is MerchantType {
		return typeof value == "string" && merchantTypes.includes(value as MerchantType)
	}
}
