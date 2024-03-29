const paxpayFeatures = [
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
	"LEGACY_USER_TABLE",
	"LEGACY_CARD_TABLE",
	"SWITCHER_PORTAL_ONLY",
	"SWITCHER_PORTAL",
	"SWITCHER_POMS_ONLY",
	"SWITCHER_POMS",
] as const

export type PaxpayFeature = typeof paxpayFeatures[number]

export namespace PaxpayFeature {
	export function is(value: unknown): value is PaxpayFeature {
		return typeof value == "string" && paxpayFeatures.includes(value as PaxpayFeature)
	}
}
