const paymentMethodTypes = ["card", "transfer"] as const
export type PaymentMethodType = typeof paymentMethodTypes[number]

export namespace PaymentMethodType {
	export function is(value: unknown): value is PaymentMethodType {
		return typeof value == "string" && paymentMethodTypes.includes(value as PaymentMethodType)
	}
}
