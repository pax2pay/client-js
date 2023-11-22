import { Currency } from "isoly"
import { CardResponseV2 } from "./CardResponseV2"
import { MerchantResponse } from "./MerchantResponse"

export interface PaymentResponse {
	id: string
	merchant: MerchantResponse
	amount: number
	currency: Currency
	card?: CardResponseV2
}
