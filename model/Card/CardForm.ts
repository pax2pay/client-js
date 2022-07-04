const cardForm = ["GENERATABLE", "PHYSICAL", "VIRTUAL"] as const

export type CardForm = typeof cardForm[number]

export namespace CardForm {
	export function is(value: unknown): value is CardForm {
		return typeof value == "string" && cardForm.includes(value as CardForm)
	}
}
