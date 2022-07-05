import * as isoly from "isoly"
import { PaymentOption } from "./PaymentOption"

export interface PaymentMethodOptionResponse {
	option: PaymentOption
	generationChargeCurrency: isoly.Currency
	generationChargeAmount: number
}

export namespace PaymentMethodOptionResponse {
	export function is(value: PaymentMethodOptionResponse | any): value is PaymentMethodOptionResponse {
		return (
			typeof value == "object" &&
			PaymentOption.is(value.option) &&
			isoly.Currency.is(value.generationChargeCurrency) &&
			typeof value.generationChargeAmount == "number"
		)
	}
}
