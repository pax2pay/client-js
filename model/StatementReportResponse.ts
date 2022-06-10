import { StatementReportResponseRow } from "./StatementReportResponseRow"

export interface StatementReportResponse {
	openingAvailableBalance: number
	closingAvailableBalance: number
	openingActualBalance: number
	closingActualBalance: number
	statements: StatementReportResponseRow[]
}
