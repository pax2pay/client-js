import { PaymentOption } from "./PaymentOption"

export interface PaymentMethodOptionResponse {
	option: PaymentOption
	generationChargeCurrency: string
	generationChargeAmount: number
}
