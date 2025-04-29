import { Currency } from "isoly"
import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"
import { Usage } from "./Usage"

/**
 * TODO: Remove this type.
 * It does not exist as a type in the API.
 * However it's extensively used in the UI, and always created from other types.
 * Should be replaced by CardTypeResponse.
 */
export interface CardType {
	providerCode: ProviderCode
	cardType: string
	cardName?: string
	representAs?: string
	currencies?: Currency[]
	usages?: Usage
}
export namespace CardType {
	export const type = isly.object<CardType>({
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		cardType: isly.string(),
		cardName: isly.string().optional(),
		representAs: isly.string().optional(),
		currencies: isly.array(isly.fromIs("Currency", Currency.is)).optional(),
		usages: Usage.type.optional(),
	})
	export const is = type.is
}
