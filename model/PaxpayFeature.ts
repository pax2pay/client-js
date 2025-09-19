import { isly } from "isly"

export type PaxpayFeature = typeof PaxpayFeature.values[number]

export namespace PaxpayFeature {
	export const values = [
		"ALLOW_CARD_CREATION_WITH_NEGATIVE_BALANCE",
		"FUZZY_SEARCH_COLLECTION_TRAVERSAL",
		"BANK_TRANSFERS",
		"SHOW_EMPTY_STATEMENTS",
		"BETA_PAYMENTS",
		"RECONCILIATION_REPORT_V2",
		"INSIGHTS_ROOM",
		"DELIVERY_WITH_ATTACHMENT",
	] as const
	export const type = isly.string(values)
	export const is = type.is
}
