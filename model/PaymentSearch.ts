import * as isoly from "isoly"
import { isly } from "isly"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { PaymentDeliveryStatus } from "./PaymentDeliveryStatus"
import { PaymentMethodType } from "./PaymentMethodType"
import { PaymentOperationType } from "./PaymentOperationType"
import { PaymentStatus } from "./PaymentStatus"
import { ProviderCode } from "./ProviderCode"
import { Range } from "./Range"

export interface PaymentSearch {
	fuzzySearch?: string
	status?: PaymentStatus[]
	method?: PaymentMethodType
	createdBy?: string[]
	personallyApprovable?: boolean
	paymentId?: string[]
	cardId?: string[]
	merchantId?: string[]
	accountId?: string[]
	providerCode?: ProviderCode[]
	currency?: isoly.Currency[]
	createdOn?: Range<isoly.DateTime>
	initiationDate?: Range<isoly.Date>
	metadataFormatName?: string[]
	total?: Range<number>
	remainingLimitPercent?: Range<number>
	deliveryStatus?: PaymentDeliveryStatus[]
	cardIssueDate?: Range<isoly.Date>
	cardExpiry?: Range<isoly.Date>
	cardType?: CardTypeSpecification | CardTypeSpecification[]
	cardNumber?: string
	cardUsage?: CardUsage
	transferReference?: string
	metadataText?: string
	includeCount?: boolean
	onlyCount?: boolean
	hasOperations?: PaymentOperationType[]
	doesntHaveOperations?: PaymentOperationType[]
}
export namespace PaymentSearch {
	export const type = isly.object<PaymentSearch>({
		fuzzySearch: isly.string().optional(),
		status: PaymentStatus.type.array().optional(),
		method: PaymentMethodType.type.optional(),
		createdBy: isly.string().array().optional(),
		personallyApprovable: isly.boolean().optional(),
		paymentId: isly.string().array().optional(),
		cardId: isly.string().array().optional(),
		merchantId: isly.string().array().optional(),
		accountId: isly.string().array().optional(),
		providerCode: ProviderCode.type.array().optional(),
		currency: isly.array(isly.fromIs("Currency", isoly.Currency.is)).optional(),
		createdOn: Range.type.optional(),
		initiationDate: Range.type.optional(),
		metadataFormatName: isly.string().array().optional(),
		total: Range.type.optional(),
		remainingLimitPercent: Range.type.optional(),
		deliveryStatus: PaymentDeliveryStatus.type.array().optional(),
		cardIssueDate: Range.type.optional(),
		cardExpiry: Range.type.optional(),
		cardType: isly.union(CardTypeSpecification.type, CardTypeSpecification.type.array()).optional(),
		cardNumber: isly.string().optional(),
		cardUsage: CardUsage.type.optional(),
		transferReference: isly.string().optional(),
		metadataText: isly.string().optional(),
		includeCount: isly.boolean().optional(),
		onlyCount: isly.boolean().optional(),
		hasOperations: PaymentOperationType.type.array().optional(),
		doesntHaveOperations: PaymentOperationType.type.array().optional(),
	})
	export const is = type.is
}
