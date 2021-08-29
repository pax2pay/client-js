import { CardTypeSpecification } from "./CardTypeSpecification"
import { ProviderCode } from "./ProviderCode"

export interface CardSearch {
	cardId?: number
	providerCode?: ProviderCode
	state?: "ACTIVE" | "INACTIVE" | "CLOSED" | "DELETED" | "EXPIRED" | "PENDING" | "APPROVED" | "DECLINED" | "GENERATED"
	currency?: string
	friendlyName?: string
	createdBy?: string
	nameOnCard?: string
	fundingBalanceIsLessThan?: number
	personallyApprovable?: boolean
	issueDate?: string
	expiryDate?: string
	cardType?: CardTypeSpecification
	cardNumber?: string
	providerAccountId?: string
	createdBefore?: string
	createdAfter?: string
	usage?: "SINGLE_USE" | "MULTIPLE_USE"
	expiryDateAfter?: string
}
