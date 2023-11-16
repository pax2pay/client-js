import { PaymentMethodType } from "./PaymentMethodType"
import { SuggestedFundingAccountOptions } from "./SuggestedFundingAccountOptions"

export interface SuggestedPaymentMethodResponse {
	type: PaymentMethodType
	accountId: SuggestedFundingAccountOptions
}
