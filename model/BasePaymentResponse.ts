import { AbstractPaymentResponse } from "./AbstractPaymentResponse"
import { MerchantResponse } from "./MerchantResponse"
import { PaymentDeliveryResponse } from "./PaymentDeliveryResponse"

export interface BasePaymentResponse extends AbstractPaymentResponse {
	/** @deprecated use merchants */
	merchant?: MerchantResponse
	/** Every merchant this payment is for */
	merchants?: MerchantResponse[]
	delivery?: PaymentDeliveryResponse
}

export namespace BasePaymentResponse {
	export const type = AbstractPaymentResponse.type.extend<BasePaymentResponse>({
		merchant: MerchantResponse.type.optional(),
		merchants: MerchantResponse.type.array().optional(),
		delivery: PaymentDeliveryResponse.type.optional(),
	})
	export const is = type.is
}
