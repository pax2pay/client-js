import { isly } from "isly"

export interface SummaryMerchantResponse {
	name?: string
	restrictable?: boolean
	isDefault?: boolean
	/** On a payment's merchant, true when it was auto-assigned from card transactions rather than set manually */
	autoAssigned?: boolean
	/** On a payment's merchant, true when the payment's card is restricted to this merchant */
	locked?: boolean
}
export namespace SummaryMerchantResponse {
	export const type = isly.object<SummaryMerchantResponse>({
		name: isly.string().optional(),
		restrictable: isly.boolean().optional(),
		isDefault: isly.boolean().optional(),
		autoAssigned: isly.boolean().optional(),
		locked: isly.boolean().optional(),
	})
	export const is = type.is
}
