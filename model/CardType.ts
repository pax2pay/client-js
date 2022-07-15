export interface CardType {
	cardType: string
	representAs: string
	cardName?: string
}
export namespace CardType {
	export function is(value: CardType | any): value is CardType {
		return (
			(typeof value == "object" &&
				typeof value.cardType == "string" &&
				typeof value.representAs == "string" &&
				typeof value.cardName == "string") ||
			value.cardName == undefined
		)
	}
}
