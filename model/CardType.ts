import { Currency } from "isoly"
import { ProviderCode } from "./ProviderCode"

export interface CardType {
	providerCode: ProviderCode
	cardType: string
	representAs: string
	cardName?: string
	currencies?: Currency[]
}
export namespace CardType {
	export function is(value: CardType | any): value is CardType {
		return (
			typeof value == "object" &&
			ProviderCode.is(value.providerCode) &&
			typeof value.cardType == "string" &&
			typeof value.representAs == "string" &&
			(typeof value.cardName == "string" || value.cardName == undefined)
		)
	}
}
