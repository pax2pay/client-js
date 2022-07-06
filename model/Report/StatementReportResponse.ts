import { Currency } from "isoly"
import { ProviderCode } from "../Provider/ProviderCode"
import { StatementReportResponseRow } from "./StatementReportResponseRow"

export interface StatementReportResponse {
	openingAvailableBalance: number
	closingAvailableBalance: number
	openingActualBalance: number
	closingActualBalance: number
	providerCode: ProviderCode
	providerAccountId: string
	currency: Currency
	totalStatements: number
	statements: StatementReportResponseRow[]
}

export namespace StatementReportResponse {
	export function is(value: StatementReportResponse | any): value is StatementReportResponse {
		return (
			typeof value == "object" &&
			typeof value.openingAvailableBalance == "number" &&
			typeof value.closingAvailableBalance == "number" &&
			typeof value.openingActualBalance == "number" &&
			typeof value.closingActualBalance == "number" &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerAccountId == "string" &&
			Currency.is(value.currency) &&
			typeof value.totalStatements == "number" &&
			Array.isArray(value.statements) &&
			value.statements.every((item: any) => StatementReportResponseRow.is(item))
		)
	}
}
