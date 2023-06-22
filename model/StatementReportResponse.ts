import { Currency } from "isoly"
import { ProviderCode } from "./ProviderCode"
import { StatementReportResponseRow } from "./StatementReportResponseRow"

export interface StatementReportResponse {
	openingBalance: number
	closingBalance: number
	paidIn?: number
	paidOut?: number
	providerCode: ProviderCode
	providerAccountId: string
	currency: Currency
	totalStatements: number
	statements: StatementReportResponseRow[]
}
