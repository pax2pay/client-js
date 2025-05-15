const statementReportRowActionType = [
	"AUTHORISATION",
	"AUTHORISATION_DECLINED",
	"SETTLEMENT",
	"AUTHORISATION_AND_SETTLEMENT",
	"REVERSAL",
	"REFUND",
	"TRANSFER_IN",
	"TRANSFER_OUT",
	"SCHEDULED_CARD_AMENDMENT",
	"USABLE_CARD",
	"FUTURE_TRANSFER",
	"AUTHORISATION_FEE",
	"SETTLEMENT_FEE",
	"REVERAL_FEE",
	"REFUND_FEE",
] as const
export type StatementReportRowActionType = typeof statementReportRowActionType[number]

export namespace StatementReportRowActionType {
	export function is(value: unknown): value is StatementReportRowActionType {
		return typeof value == "string" && statementReportRowActionType.includes(value as StatementReportRowActionType)
	}
}
