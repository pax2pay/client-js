import { CardFundingAccountResponse } from "./CardFundingAccountResponse"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { ProviderCode } from "./ProviderCode"

export interface CardResponseV2 {
	cardType: CardTypeSpecification | string
	cardNumber: string
	cvv: string
	expiryDate: string
	nameOnCard: string
	balance: number
	issueDate: string
	providerCode: ProviderCode
	providerCardId: string
	usage: CardUsage
	fundingAccount: CardFundingAccountResponse
	createdBy: string
}

export namespace CardResponseV2 {
	export function is(value: CardResponseV2 | any): value is CardResponseV2 {
		return (
			typeof value == "object" &&
			(typeof value.cardType == "string" || CardTypeSpecification.is(value.cardType)) &&
			typeof value.cardNumber == "string" &&
			typeof value.cvv == "string" &&
			typeof value.expiryDate == "string" &&
			typeof value.nameOnCard == "string" &&
			typeof value.balance == "number" &&
			typeof value.issueDate == "string" &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerCardId == "string" &&
			CardUsage.is(value.usage) &&
			CardFundingAccountResponse.is(value.fundingAccount) &&
			typeof value.createdBy == "string"
		)
	}
}
