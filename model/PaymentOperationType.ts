import { isly } from "isly"

export type PaymentOperationType = typeof PaymentOperationType.types[number]

export namespace PaymentOperationType {
	export const types = [
		"approved authorisation",
		"declined authorisation",
		"reversal",
		"reversal declined",
		"settlement",
		"refund",
		"authorisation fee",
		"settlement fee",
		"reversal fee",
		"refund fee",
		"faster payments",
		"BACS",
		"CHAPS",
		"direct debit",
		"SEPA instant",
		"SEPA",
		"provider internal",
		"SWIFT",
		"chargeback",
		"created",
		"limit change",
		"purchase",
		"closed",
		"frozen",
		"thawed",
		"approval pending",
		"expired",
		"approved",
		"declined",
		"transfer",
	] as const
	export const type = isly.string(types)
	export const is = type.is
	export function toDisplay(value: PaymentOperationType): string {
		if (value == "reversal fee")
			return "fee reversal"
		if (value == "refund fee")
			return "fee refund"
		if (value == "thawed")
			return "unfrozen"
		return value
	}
}
