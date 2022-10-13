export interface CardResponseV2Summary {
	cardNumber: string
	createdBy: string
}

export namespace CardResponseV2Summary {
	export function is(value: CardResponseV2Summary | any): value is CardResponseV2Summary {
		return typeof value == "object" && typeof value.cardNumber == "string" && typeof value.createdBy == "string"
	}
}
