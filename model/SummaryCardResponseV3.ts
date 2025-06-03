import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"

export interface SummaryCardResponseV3 {
	id: string
	providerCode: ProviderCode
	providerCardId: string
	cardType: string
	pan: string
	hasDeclines?: boolean
}

export namespace SummaryCardResponseV3 {
	export const type = isly.object<SummaryCardResponseV3>({
		id: isly.string(),
		providerCode: ProviderCode.type,
		providerCardId: isly.string(),
		cardType: isly.string(),
		pan: isly.string(),
		hasDeclines: isly.boolean().optional(),
	})
	export const is = type.is
}
