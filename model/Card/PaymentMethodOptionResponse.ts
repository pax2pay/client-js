import * as isoly from "isoly"
import { PaymentOption } from "./PaymentOption"

export interface PaymentMethodOptionResponse {
	option: PaymentOption
	generationChargeCurrency: isoly.Currency
	generationChargeAmount: number
}
