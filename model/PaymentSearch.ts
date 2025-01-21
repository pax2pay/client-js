import * as isoly from "isoly"
import { isly } from "isly"
import { CardUsage } from "./CardUsage"
import { PaymentDeliveryStatus } from "./PaymentDeliveryStatus"
import { PaymentMethodType } from "./PaymentMethodType"
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
	deliveryStatus?: PaymentDeliveryStatus[]
	cardExpiry?: Range<isoly.Date>
	cardNumber?: string
	cardUsage?: CardUsage
	includeCount?: boolean
	onlyCount?: boolean
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
		deliveryStatus: PaymentDeliveryStatus.type.array().optional(),
		cardExpiry: Range.type.optional(),
		cardNumber: isly.string().optional(),
		cardUsage: CardUsage.type.optional(),
		includeCount: isly.boolean().optional(),
		onlyCount: isly.boolean().optional(),
	})
	export const is = type.is
}
