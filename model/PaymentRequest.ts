import { Currency } from "isoly"
import { isly } from "isly"
import { ExtractionSummary } from "./ExtractionSummary"
import { MetadataRequest } from "./MetadataRequest"
import { PaymentAmountScheduleRequest } from "./PaymentAmountScheduleRequest"
import { PaymentCardCreateRequest } from "./PaymentCardCreateRequest"
import { PaymentDeliveryRequest } from "./PaymentDeliveryRequest"
import { PaymentMerchantRequest } from "./PaymentMerchantRequest"
import { PaymentTransferCreateRequest } from "./PaymentTransferCreateRequest"

export interface PaymentRequest {
	batchId?: string
	account: string
	amount?: number
	currency: Currency
	method?: "card" | "transfer"
	merchant?: PaymentMerchantRequest
	meta?: MetadataRequest
	card?: PaymentCardCreateRequest
	transfer?: PaymentTransferCreateRequest
	delivery?: PaymentDeliveryRequest
	schedule?: PaymentAmountScheduleRequest[]
	/** The invoice this payment is made against, from Payments.draftFromInvoice */
	document?: string
	/** Read-only: set on a draft from Payments.draftFromInvoice, ignored if sent back */
	_extraction?: ExtractionSummary
}
export namespace PaymentRequest {
	export const type = isly.object<PaymentRequest>({
		batchId: isly.string().optional(),
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
		document: isly.string().optional(),
		_extraction: ExtractionSummary.type.optional(),
	})
	export const is = type.is
}
