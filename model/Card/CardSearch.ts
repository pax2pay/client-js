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
