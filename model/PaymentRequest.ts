import { Currency } from "isoly"
import { isly } from "isly"
import { BookingInfoRequest } from "./BookingInfoRequest"
import { MerchantRequest } from "./MerchantRequest"
import { PaymentCardCreateRequest } from "./PaymentCardCreateRequest"
import { PaymentTransferCreateRequest } from "./PaymentTransferCreateRequest"

export interface PaymentRequest {
	account: string
	amount: number
	currency: Currency
	method?: "card" | "transfer"
	merchant?: MerchantRequest
	meta?: BookingInfoRequest
	card?: PaymentCardCreateRequest
	transfer?: PaymentTransferCreateRequest
}
export namespace PaymentRequest {
	export const type = isly.object<PaymentRequest>({
		account: isly.string(),
		amount: isly.number(),
		currency: isly.fromIs("Currency", Currency.is),
		method: isly.string(["card", "transfer"]).optional(),
		merchant: isly.fromIs("MerchantRequest", MerchantRequest.is).optional(),
		meta: isly.fromIs("BookingInfoRequest", BookingInfoRequest.is).optional(),
		card: isly.fromIs("PaymentCardCreateRequest", PaymentCardCreateRequest.is).optional(),
		transfer: isly.fromIs("PaymentTransferCreateRequest", PaymentTransferCreateRequest.is).optional(),
	})
	export const is = type.is
}
