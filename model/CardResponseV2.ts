import { CardFundingAccountResponse } from "./CardFundingAccountResponse"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { ProviderCode } from "./ProviderCode"

export interface CardResponseV2 {
	cardType?: CardTypeSpecification | string
	cardNumber?: string
	cvv?: string
	expiryDate?: any
	nameOnCard?: string
	balance?: number
	issueDate?: string
	providerCode?: ProviderCode
	providerCardId?: string
	usage?: CardUsage
	fundingAccount?: CardFundingAccountResponse
	createdBy?: string
}
