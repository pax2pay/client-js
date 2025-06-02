const statementReportRowActionType = [
	"AUTHORISATION",
	"SETTLEMENT",
	"REVERSAL",
	"REFUND",
	"AUTHORISATION_FEE",
	"SETTLEMENT_FEE",
	"REVERSAL_FEE",
	"REFUND_FEE",
	"TRANSFER_IN",
	"TRANSFER_OUT",
	"USABLE_CARD",
	"FUTURE_TRANSFER",
	"SCHEDULED_CARD_AMENDMENT",
] as const
export type StatementReportRowActionType = typeof statementReportRowActionType[number]

export namespace StatementReportRowActionType {
	export function is(value: unknown): value is StatementReportRowActionType {
		return typeof value == "string" && statementReportRowActionType.includes(value as StatementReportRowActionType)
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
