import { CardFundingAccountResponse } from "./CardFundingAccountResponse"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

export interface CardResponseV2 {
	cardType?: CardTypeSpecification
	cardNumber?: string
	cvv?: string
	expiryDate?: any
	nameOnCard?: string
	balance?: number
	issueDate?: string
	providerCode?: ProviderCode
	providerCardId?: string
	usage?: "SINGLE_USE" | "MULTIPLE_USE"
	fundingAccount?: CardFundingAccountResponse
	createdBy?: string
}
