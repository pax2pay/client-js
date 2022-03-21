import { CardFundingAccountResponse } from "./CardFundingAccountResponse"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { ProviderCode } from "./ProviderCode"

export interface CardResponseV2 {
	cardType?: CardTypeSpecification | string
	cardNumber?: string
	cvv?: string
	expiryDate?: string
	nameOnCard?: string
	balance?: number
	issueDate?: string
	providerCode?: ProviderCode
	providerCardId?: string
	usage?: CardUsage
	fundingAccount?: CardFundingAccountResponse
	createdBy?: string
}

export namespace CardResponseV2 {
	export function is(value: CardResponseV2 | any): value is CardResponseV2 {
		return (
			typeof value == "object" &&
			(value.cardType == undefined || typeof value.cardType == "string" || CardTypeSpecification.is(value.cardType)) &&
			(value.cardNumber == undefined || typeof value.cardNumber == "string") &&
			(value.cvv == undefined || typeof value.cvv == "string") &&
			(value.expiryDate == undefined || typeof value.expiryDate == "string") &&
			(value.nameOnCard == undefined || typeof value.nameOnCard == "string") &&
			(value.balance == undefined || typeof value.balance == "number") &&
			(value.issueDate == undefined || typeof value.issueDate == "string") &&
			(value.providerCode == undefined || ProviderCode.is(value.providerCode)) &&
			(value.providerCardId == undefined || typeof value.providerCardId == "string") &&
			(value.usage == undefined || CardUsage.is(value.usage)) &&
			(value.fundingAccount == undefined || CardFundingAccountResponse.is(value.fundingAccount)) &&
			(value.createdBy == undefined || typeof value.createdBy == "string")
		)
	}
}
