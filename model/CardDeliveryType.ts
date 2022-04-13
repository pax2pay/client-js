const cardDeliveryType = ["EMAIL"] as const
export type CardDeliveryType = typeof cardDeliveryType[number]

export namespace CardDeliveryType {
	export function is(value: unknown): value is CardDeliveryType {
		return typeof value == "string" && cardDeliveryType.includes(value as CardDeliveryType)
	}
}
