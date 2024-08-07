import { isly } from "isly"

export type CardTransactionType = typeof CardTransactionType.types[number]

export namespace CardTransactionType {
	export const types = [
		"CARD_CREATION",
		"AUTHORISATION_APPROVED",
		"AUTHORISATION_DECLINED",
		"SETTLEMENT",
		"REVERSAL",
		"REFUND",
	] as const
	export const type = isly.string<CardTransactionType>(types)
	export const is = type.is
}
