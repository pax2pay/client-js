import { Currency } from "isoly"
import { isly } from "isly"
import { MetadataRequest } from "./MetadataRequest"
import { PaymentAmountScheduleRequest } from "./PaymentAmountScheduleRequest"
import { PaymentAmountScheduleResponse } from "./PaymentAmountScheduleResponse"
import { PaymentCardCreateRequest } from "./PaymentCardCreateRequest"
import { PaymentDeliveryRequest } from "./PaymentDeliveryRequest"
import { PaymentMerchantRequest } from "./PaymentMerchantRequest"
import { PaymentTransferCreateRequest } from "./PaymentTransferCreateRequest"

export interface PaymentRequest {
	account: string
	amount?: number
	currency: Currency
	method?: "card" | "transfer"
	merchant?: PaymentMerchantRequest
	meta?: MetadataRequest
	card?: PaymentCardCreateRequest
	transfer?: PaymentTransferCreateRequest
	delivery?: PaymentDeliveryRequest
	schedule?: PaymentAmountScheduleResponse[]
}
export namespace PaymentRequest {
	export const type = isly.object<PaymentRequest>({
		account: isly.string(),
		amount: isly.number().optional(),
		currency: isly.fromIs("Currency", Currency.is),
		method: isly.string(["card", "transfer"]).optional(),
		merchant: isly.fromIs("PaymentMerchantRequest", PaymentMerchantRequest.is).optional(),
		meta: MetadataRequest.type.optional(),
		card: isly.fromIs("PaymentCardCreateRequest", PaymentCardCreateRequest.is).optional(),
		transfer: isly.fromIs("PaymentTransferCreateRequest", PaymentTransferCreateRequest.is).optional(),
		delivery: isly.fromIs("PaymentDeliveryRequest", PaymentDeliveryRequest.is).optional(),
		schedule: isly.array(isly.fromIs("PaymentAmountScheduleRequest", PaymentAmountScheduleRequest.is)).optional(),
	})
	export const is = type.is
}
