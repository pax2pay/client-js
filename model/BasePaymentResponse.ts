import { AbstractPaymentResponse } from "./AbstractPaymentResponse"
import { MerchantResponse } from "./MerchantResponse"
import { PaymentDeliveryResponse } from "./PaymentDeliveryResponse"

export interface BasePaymentResponse extends AbstractPaymentResponse {
	merchant?: MerchantResponse
	delivery?: PaymentDeliveryResponse
}

export namespace BasePaymentResponse {
	export const type = AbstractPaymentResponse.type.extend<BasePaymentResponse>({
		merchant: MerchantResponse.type.optional(),
		delivery: PaymentDeliveryResponse.type.optional(),
	})
	export const is = type.is
}
