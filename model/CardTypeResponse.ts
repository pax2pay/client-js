export interface CardTypeResponse {
	cardType: string
	representAs: string
	cardName?: string
}
export namespace CardTypeResponse {
	export function is(value: CardTypeResponse | any): value is CardTypeResponse {
		return (
			(typeof value == "object" &&
				typeof value.cardType == "string" &&
				typeof value.representAs == "string" &&
				typeof value.cardName == "string") ||
			value.cardName == undefined
		)
	}
}
