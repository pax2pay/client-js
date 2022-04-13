const cardDeliveryStatus = ["SUCCESS", "FAILURE", "TODO"] as const
export type CardDeliveryStatus = typeof cardDeliveryStatus[number]

export namespace CardDeliveryStatus {
	export function is(value: unknown): value is CardDeliveryStatus {
		return typeof value == "string" && cardDeliveryStatus.includes(value as CardDeliveryStatus)
	}
}
