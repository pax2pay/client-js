import { isly } from "isly"

export type ProviderTransactionSubType = (typeof ProviderTransactionSubType.values)[number]

export namespace ProviderTransactionSubType {
	export const values = [
		// ProviderCardTransactionType
		"CARD_CREATION",
		"CARD_CLOSE",
		"CARD_CLOSE_MANUAL",
		"CARD_LIMIT_CHANGE",
		"AUTHORISATION_APPROVED",
		"AUTHORISATION_DECLINED",
		"SETTLEMENT",
		"REVERSAL",
		"REFUND",
		"ORIGINAL_CREDIT",
		"ORIGINAL_CREDIT_SETTLEMENT",
		"ORIGINAL_CREDIT_DECLINED",
		"FEE_AUTHORISATION",
		"FEE_SETTLEMENT",
		"FEE_REVERSAL",
		"FEE_REFUND",
		// ProviderTransferTransactionType
		"BACS",
		"CHAPS",
		"DIRECT_DEBIT",
		"FASTER_PAYMENTS",
		"SEPA",
		"SECT",
		"PROVIDER_INTERNAL",
		"SWIFT",
		"REV",
		"CHARGEBACK",
		// PrognosisTransactionType
		"UNUSED_CARD",
		"FUTURE_TRANSFER",
		"SCHEDULED_CARD_AMENDMENT",
	] as const
	export const type = isly.string(values)
	export const is = type.is
}
