export type DeliveryStatus = typeof DeliveryStatus.types[number]

export namespace DeliveryStatus {
	export const types = ["SUCCESS", "FAILURE", "TODO", "PENDING", "CARD_DECLINED"] as const
	export function is(value: any): value is DeliveryStatus {
		return types.includes(value)
	}
}
