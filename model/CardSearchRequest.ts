import { Currency, Date, DateTime } from "isoly"
import { isly } from "isly"
import { AccountState } from "./AccountState"
import { BookingInfoType } from "./BookingInfoType"
import { CardTransactionType } from "./CardTransactionType"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { DeliveryStatus } from "./DeliveryStatus"
import { ProviderCode } from "./ProviderCode"
import { Range } from "./Range"
export interface CardSearchRequest {
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
	createdOn?: Range<DateTime>
	usage?: CardUsage[]
	supplierReference?: string
	deliveryStatus?: DeliveryStatus[]
	bookingInfoText?: string
	bookingInfoType?: (BookingInfoType | "NONE")[]
	hasProviderTransaction?: CardTransactionType[]
	doesntHaveProviderTransaction?: CardTransactionType[]
}

export namespace CardSearchRequest {
	export const type = isly.object<CardSearchRequest>({
		fuzzySearch: isly.string().optional(),
		providerCode: isly.union(ProviderCode.type, isly.array(ProviderCode.type)).optional(),
		status: isly.array(AccountState.type).optional(),
		currency: isly.array(isly.fromIs("Currency", Currency.is).optional()),
		friendlyName: isly.string().optional(),
		createdBy: isly.string().optional(),
		nameOnCard: isly.string().optional(),
		balance: Range.Number.type.optional(),
		fundingBalance: Range.Number.type.optional(),
		remainingBalance: Range.Number.type.optional(),
		remainingBalancePercent: Range.Number.type.optional(),
		personallyApprovable: isly.boolean().optional(),
		issueDate: Range.Date.type.optional(),
		expiryDate: Range.Date.type.optional(),
		cardType: isly.array(isly.union(CardTypeSpecification.type, isly.string())).optional(),
		cardNumber: isly.string().optional(),
		providerAccountId: isly.string().optional(),
		createdOn: Range.DateTime.type.optional(),
		usage: isly.array(CardUsage.type).optional(),
		supplierReference: isly.string().optional(),
		deliveryStatus: isly.array(DeliveryStatus.type).optional(),
		bookingInfoText: isly.string().optional(),
		bookingInfoType: isly.array(isly.union(BookingInfoType.type, isly.string("NONE")).optional()),
		hasProviderTransaction: isly.array(CardTransactionType.type).optional(),
		doesntHaveProviderTransaction: isly.array(CardTransactionType.type).optional(),
	})
	export const flaw = type.flaw
	export const is = type.is
}
