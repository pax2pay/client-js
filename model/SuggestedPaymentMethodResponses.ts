import { PaymentMethodType } from "./PaymentMethodType"
import { SuggestedCardPaymentMethodResponse } from "./SuggestedCardPaymentMethodResponse"

export interface SuggestedPaymentMethodResponses {
	suggested?: PaymentMethodType
	chosen?: SuggestedCardPaymentMethodResponse //add transfer when available
	required?: PaymentMethodType
	options: SuggestedCardPaymentMethodResponse[] //add transfer when available
}
