import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { FundingAccountResponseV2 } from "./FundingAccountResponseV2"
import { ProviderCode } from "./ProviderCode"
import { YearMonth } from "./YearMonth"

export interface CardResponseV2 {
	cardType: CardTypeSpecification | string
	cardNumber: string
	cvv: string
	expiryDate: YearMonth
	nameOnCard: string
	balance: number
	issueDate: string
	providerCode: ProviderCode
	providerCardId: string
	usage: CardUsage
	fundingAccount: FundingAccountResponseV2
	schedule: CardScheduleResponseItem[]
	createdBy: string
}

export namespace CardResponseV2 {
	export function is(value: CardResponseV2 | any): value is CardResponseV2 {
		return (
			typeof value == "object" &&
			(typeof value.cardType == "string" || CardTypeSpecification.is(value.cardType)) &&
			typeof value.cardNumber == "string" &&
			typeof value.cvv == "string" &&
			YearMonth.is(value.expiryDate) &&
			typeof value.nameOnCard == "string" &&
			typeof value.balance == "number" &&
			typeof value.issueDate == "string" &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerCardId == "string" &&
			CardUsage.is(value.usage) &&
			FundingAccountResponseV2.is(value.fundingAccount) &&
			Array.isArray(value.schedule) &&
			value.schedule.every((a: any) => {
				return CardScheduleResponseItem.is(a)
			}) &&
			typeof value.createdBy == "string"
		)
	}
}
