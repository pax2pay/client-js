import { PaymentMethodType } from "./PaymentMethodType"

export interface SuggestionPaymentMethodRequest {
	type: PaymentMethodType
	accountId?: string
}
