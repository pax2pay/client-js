export type PaxpayFeature = typeof PaxpayFeature.values[number]

export namespace PaxpayFeature {
	export const values = [
		"ALLOW_CARD_CREATION_WITH_NEGATIVE_BALANCE",
		"FUZZY_SEARCH_COLLECTION_TRAVERSAL",
		"BANK_TRANSFERS",
		"HIDE_EMPTY_STATEMENTS",
	] as const
	export function is(value: unknown): value is PaxpayFeature {
		return typeof value == "string" && values.includes(value as PaxpayFeature)
	}
}
