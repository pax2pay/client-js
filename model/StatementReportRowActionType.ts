export type StatementReportRowActionType = typeof StatementReportRowActionType.values[number]

export namespace StatementReportRowActionType {
	export const values = [
		"TRANSFER_IN",
		"TRANSFER_OUT",
		"REFUND",
		"AUTHORISATION",
		"SETTLEMENT",
		"REVERSAL",
		"AUTHORISATION_FEE",
		"SETTLEMENT_FEE",
		"REVERSAL_FEE",
		"REFUND_FEE",
		"USABLE_CARD",
		"FUTURE_TRANSFER",
		"SCHEDULED_CARD_AMENDMENT",
	] as const
	export const displayValues = [
		"TRANSFER_IN",
		"TRANSFER_OUT",
		"REFUND",
		"AUTHORISATION",
		"SETTLEMENT",
		"REVERSAL",
		"FEE",
		"USABLE_CARD",
		"FUTURE_TRANSFER",
		"SCHEDULED_CARD_AMENDMENT",
	]
	export function is(value: unknown): value is StatementReportRowActionType {
		return typeof value == "string" && values.includes(value as StatementReportRowActionType)
	}
	export function toDisplay(value: StatementReportRowActionType): string {
		if (value == "REFUND_FEE")
			return "FEE_REFUND"
		if (value == "REVERSAL_FEE")
			return "FEE_REVERSAL"
		if (value == "SCHEDULED_CARD_AMENDMENT")
			return "SCHEDULED_CARD"
		return value
	}
}
