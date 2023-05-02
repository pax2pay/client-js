import { Currency } from "isoly"
import { ProviderCode } from "./ProviderCode"
import { StatementReportResponseRow } from "./StatementReportResponseRow"

export interface StatementReportResponse {
	openingAvailableBalance: number
	closingAvailableBalance: number
	openingActualBalance: number
	closingActualBalance: number
	paidIn: number
	paidOut: number
	providerCode: ProviderCode
	providerAccountId: string
	currency: Currency
	totalStatements: number
	statements: StatementReportResponseRow[]
}
