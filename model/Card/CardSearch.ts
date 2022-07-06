import * as isoly from "isoly"
import { AccountState } from "../Account/AccountState"
import { ProviderCode } from "../Provider/ProviderCode"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"

export interface CardSearch {
	cardId?: number
	providerCode?: ProviderCode
	state?: AccountState
	currency?: isoly.Currency
	friendlyName?: string
	createdBy?: string
	nameOnCard?: string
	fundingBalanceIsLessThan?: number
	personallyApprovable?: boolean
	issueDate?: isoly.Date
	expiryDate?: isoly.Date
	cardType?: CardTypeSpecification
	cardNumber?: string
	providerAccountId?: string
	createdBefore?: string
	createdAfter?: string
	usage?: CardUsage
	expiryDateAfter?: isoly.Date
}

export namespace CardSearch {
	export function is(value: CardSearch | any): value is CardSearch {
		return (
			typeof value == "object" &&
			(value.cardId == undefined || typeof value.cardId == "number") &&
			(value.providerCode == undefined || ProviderCode.is(value.providerCode)) &&
			(value.state == undefined || AccountState.is(value.state)) &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			(value.friendlyName == undefined || typeof value.friendlyName == "string") &&
			(value.createdBy == undefined || typeof value.createdBy == "string") &&
			(value.nameOnCard == undefined || typeof value.nameOnCard == "string") &&
			(value.fundingBalanceIsLessThan == undefined || typeof value.fundingBalanceIsLessThan == "number") &&
			(value.personallyApprovable == undefined || typeof value.personallyApprovable == "boolean") &&
			(value.issueDate == undefined || isoly.Date.is(value.issueDate)) &&
			(value.expiryDate == undefined || isoly.Date.is(value.expiryDate)) &&
			(value.cardType == undefined || CardTypeSpecification.is(value.cardType)) &&
			(value.cardNumber == undefined || typeof value.cardNumber == "string") &&
			(value.providerAccountId == undefined || typeof value.providerAccountId == "string") &&
			(value.createdBefore == undefined || typeof value.createdBefore == "string") &&
			(value.createdAfter == undefined || typeof value.createdAfter == "string") &&
			(value.usage == undefined || CardUsage.is(value.usage)) &&
			(value.expiryDateAfter == undefined || isoly.Date.is(value.expiryDateAfter))
		)
	}
}
