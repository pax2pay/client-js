const paxpayFeature = [
	"ALLOW_CARD_CREATION_WITH_NEGATIVE_BALANCE",
	"FUZZY_SEARCH_COLLECTION_TRAVERSAL",
	"BANK_TRANSFERS",
	"BATCH_PAYMENTS",
	"FIND_AND_AMEND",
	"BETA_PORTAL_FEATURES",
	"LEGACY_CARD_CREATE",
	"LEGACY_CARD_DETAILS",
	"LEGACY_CARD_SINGLE",
	"LEGACY_ACCOUNT_TABLE",
] as const

export type PaxpayFeature = typeof paxpayFeature[number]

export namespace PaxpayFeature {
	export function is(value: unknown): value is PaxpayFeature {
		return typeof value == "string" && paxpayFeature.includes(value as PaxpayFeature)
	}
}
