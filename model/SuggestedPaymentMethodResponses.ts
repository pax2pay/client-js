import { PaymentMethodType } from "./PaymentMethodType"
import { SuggestedPaymentMethodResponse } from "./SuggestedPaymentMethodResponse"

export interface SuggestedPaymentMethodResponses {
	suggested?: PaymentMethodType
	chosen?: SuggestedPaymentMethodResponse
	required?: PaymentMethodType
	options: SuggestedPaymentMethodResponse[]
}
