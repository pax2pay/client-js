export const cardForms = ["GENERATABLE", "PHYSICAL", "VIRTUAL"] as const

export type CardForm = typeof cardForms[number]

export namespace CardForm {
	export function is(value: CardForm | any): value is CardForm {
		return typeof value == "string" && cardForms.includes(value as CardForm)
	}
}
