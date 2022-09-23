import { Currency, Date } from "isoly"
import { AccountState } from "./AccountState"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { ProviderCode } from "./ProviderCode"
import { YearMonth } from "./YearMonth"
export interface CardSearchRequest {
	freeSearch?: string
	providerCode?: ProviderCode
	state?: AccountState
	states?: AccountState[]
	currency?: Currency
	friendlyName?: string
	createdBy?: string
	nameOnCard?: string
	fundingBalanceIsLessThan?: number
	personallyApprovable?: boolean
	issueDate?: string
	expiryDate?: YearMonth
	cardType?: CardTypeSpecification | string
	cardNumber?: string
	providerAccountId?: string
	createdBefore?: Date
	createdAfter?: Date
	usage?: CardUsage
	expiryDateAfter?: Date
	supplierBookingReference?: string
	supplierBookingReferenceContains?: string
}
