import { isly } from "isly"
import { PaymentStatus } from "./PaymentStatus"
import { ProviderCode } from "./ProviderCode"

export interface SummaryCardResponseV3 {
	id: string
	providerCode: ProviderCode
	providerCardId: string
	cardType: string
	pan: string
	state: PaymentStatus
}

export namespace SummaryCardResponseV3 {
	export const type = isly.object<SummaryCardResponseV3>({
		id: isly.string(),
		providerCode: ProviderCode.type,
		providerCardId: isly.string(),
		cardType: isly.string(),
		pan: isly.string(),
		state: PaymentStatus.type,
	})
	export const is = type.is
}
