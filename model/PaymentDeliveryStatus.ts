import { isly } from "isly"
import { DeliveryStatus } from "./DeliveryStatus"

export type PaymentDeliveryStatus = typeof PaymentDeliveryStatus.values[number]

export namespace PaymentDeliveryStatus {
	export const values = ["success", "failure", "todo", "pending", "declined"] as const
	export const type = isly.string(values)
	export const is = type.is
	export const toDeliveryStatus = (value: PaymentDeliveryStatus): DeliveryStatus => {
		return (
			{
				success: "SUCCESS",
				failure: "FAILURE",
				todo: "TODO",
				pending: "PENDING",
				declined: "CARD_DECLINED",
			} as const
		)[value]
	}
	export const fromDeliveryStatus = (value: DeliveryStatus): PaymentDeliveryStatus => {
		return (
			{
				SUCCESS: "success",
				FAILURE: "failure",
				TODO: "todo",
				PENDING: "pending",
				CARD_DECLINED: "declined",
			} as const
		)[value]
	}
}
