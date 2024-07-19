import { Currency } from "isoly"
import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"

export interface CardType {
	providerCode: ProviderCode
	cardType: string
	cardName?: string
	representAs?: string
	currencies?: Currency[]
}
export namespace CardType {
	export const type = isly.object<CardType>({
		providerCode: isly.fromIs("ProviderCode", ProviderCode.is),
		cardType: isly.string(),
		cardName: isly.string().optional(),
		representAs: isly.string().optional(),
		currencies: isly.array(isly.fromIs("Currency", Currency.is)).optional(),
	})
	export const is = type.is
}
