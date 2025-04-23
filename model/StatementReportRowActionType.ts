import { isly } from "isly"

export type StatementReportRowActionType = typeof StatementReportRowActionType.values[number]

export namespace StatementReportRowActionType {
	export const values = [
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
	] as const
	export const type = isly.string<StatementReportRowActionType>(values)
	export const is = type.is
}
