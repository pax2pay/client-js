import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"

export interface SummaryCardResponseV3 {
	id: string
	providerCode: ProviderCode
	providerCardId: string
	cardType: string
	pan: string
	hasDeclines?: boolean
	/** @deprecated true if locked to any merchant; the payment's merchants marked locked say which */
	restrictedToMerchant?: boolean
}

export namespace SummaryCardResponseV3 {
	export const type = isly.object<SummaryCardResponseV3>({
		id: isly.string(),
		providerCode: ProviderCode.type,
		providerCardId: isly.string(),
		cardType: isly.string(),
		pan: isly.string(),
		hasDeclines: isly.boolean().optional(),
		restrictedToMerchant: isly.boolean().optional(),
	})
	export const is = type.is
}
