import { Currency } from "isoly"
import { isly } from "isly"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { MerchantResponse } from "./MerchantResponse"
import { PaymentCardCreateRequest } from "./PaymentCardCreateRequest"
import { PaymentTransferCreateRequest } from "./PaymentTransferCreateRequest"

export interface PaymentRequest {
	account: string
	amount: number
	currency: Currency
	method?: "card" | "transfer"
	merchant?: MerchantResponse
	meta?: BookingInfoResponse
	card?: PaymentCardCreateRequest
	transfer?: PaymentTransferCreateRequest
}
export namespace PaymentRequest {
	export const type = isly.object<PaymentRequest>({
		account: isly.string(),
		amount: isly.number(),
		currency: isly.fromIs("Currency", Currency.is),
		method: isly.string(["card", "transfer"]).optional(),
		merchant: isly.fromIs("MerchantResponse", MerchantResponse.is).optional(),
		meta: isly.fromIs("BookingInfoResponse", BookingInfoResponse.is).optional(),
		card: isly.fromIs("PaymentCardCreateRequest", PaymentCardCreateRequest.is).optional(),
		transfer: isly.fromIs("PaymentTransferCreateRequest", PaymentTransferCreateRequest.is).optional(),
	})
	export const is = type.is
}
