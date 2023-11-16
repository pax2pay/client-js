import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"

export interface SuggestionCardPaymentMethodRequest {
	cardType?: CardTypeSpecification
	usage?: CardUsage
}
