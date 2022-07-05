/**
 * Generated card
 */
export interface PaymentOption {
	type: string
}

export namespace PaymentOption {
	export function is(value: PaymentOption | any): value is PaymentOption {
		return typeof value == "object" && typeof value.type == "string"
	}
}
