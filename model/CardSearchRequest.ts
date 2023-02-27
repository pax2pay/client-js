import { Currency, Date, DateTime } from "isoly"
import { AccountState } from "./AccountState"
import { BookingInfoType } from "./BookingInfoType"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { ProviderCode } from "./ProviderCode"
import { Range } from "./Range"
export interface CardSearchRequest {
	fuzzySearch?: string
	providerCode?: ProviderCode
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
	createdOn?: Range<DateTime>
	usage?: CardUsage[]
	bookingInfoText?: string
	bookingInfoType?: (BookingInfoType | "NONE")[]
}
