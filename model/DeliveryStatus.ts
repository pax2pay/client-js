import { isly } from "isly"

export type DeliveryStatus = typeof DeliveryStatus.types[number]

export namespace DeliveryStatus {
	export const types = ["SUCCESS", "FAILURE", "TODO", "PENDING", "CARD_DECLINED"] as const
	export const type = isly.string<DeliveryStatus>(types)
	export const is = type.is
}

export const arr = isly.array(isly.string())
export const arr2 = isly.string().array({ criteria: "length", value: 3 })
export const num = isly.number(["integer", "negative"])
