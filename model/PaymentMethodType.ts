import { isly } from "isly"

export type PaymentMethodType = typeof PaymentMethodType.values[number]

export namespace PaymentMethodType {
	export const values = ["card", "transfer"] as const
	export const type = isly.string<PaymentMethodType>(values)
	export const is = type.is
}
