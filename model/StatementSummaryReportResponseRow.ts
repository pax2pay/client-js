import * as isoly from "isoly"

export interface StatementSummaryReportResponseRow {
	dateRange: {
		start: isoly.Date
		end: isoly.Date
	}
	openingBalance: number
	closingBalance: number
	paidIn: number
	paidOut: number
}
