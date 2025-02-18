import { isly } from "isly"

export type PaymentOperationType = typeof PaymentOperationType.types[number]

export namespace PaymentOperationType {
	export const types = [
		"approved authorisation",
		"declined authorisation",
		"reversal",
		"settlement",
		"refund",
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
}
