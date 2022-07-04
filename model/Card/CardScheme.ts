const cardScheme = ["VISA", "MASTERCARD", "AMERICAN_EXPRESS"] as const

export type CardScheme = typeof cardScheme[number]

export namespace CardScheme {
	export function is(value: unknown): value is CardScheme {
		return typeof value == "string" && cardScheme.includes(value as CardScheme)
	}
}
