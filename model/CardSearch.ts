import { Currency, Date, DateTime } from "isoly"
import { AccountState } from "./AccountState"
import { BookingInfoType } from "./BookingInfoType"
import { CardTransactionType } from "./CardTransactionType"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { DeliveryStatus } from "./DeliveryStatus"
import { ProviderCode } from "./ProviderCode"
import { Range } from "./Range"
export interface CardSearch {
	fuzzySearch?: string
	providerCode?: ProviderCode | ProviderCode[]
	status?: AccountState[]
	currency?: Currency[]
	friendlyName?: string
	createdBy?: string
	nameOnCard?: string
	balance?: Range<number>
	fundingBalance?: Range<number>
	remainingBalance?: Range<number>
	remainingBalancePercent?: Range<number>
	personallyApprovable?: boolean
	issueDate?: Range<Date>
	expiryDate?: Range<Date>
	cardType?: (CardTypeSpecification | string)[]
	cardNumber?: string
	providerAccountId?: string
	providerCardId?: string
	createdOn?: Range<DateTime>
	usage?: CardUsage[]
	supplierReference?: string
	deliveryStatus?: DeliveryStatus[]
	bookingInfoText?: string
	bookingInfoType?: (BookingInfoType | "NONE")[]
	unchecked?: boolean
	alwaysCount?: boolean
	hasProviderTransaction?: CardTransactionType[]
	doesntHaveProviderTransaction?: CardTransactionType[]
}
