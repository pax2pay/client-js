import * as isoly from "isoly"
import { ProviderCode } from "../Provider/ProviderCode"

export interface StatementReportRequest {
	providerCode: ProviderCode
	providerAccountId: string
	dateRange?: isoly.TimeRange
	balanceType?: "AVAILABLE" | "ACTUAL"
	type?: "summary" | "full"
}

export namespace StatementReportRequest {
	export function is(value: StatementReportRequest | any): value is StatementReportRequest {
		return (
			typeof value == "object" &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerAccountId == "string" &&
			(value.dateRange == undefined || isoly.TimeRange.is(value.dateRange)) &&
			(value.balanceType == undefined || value.balanceType == "AVAILABLE" || value.balanceType == "ACTUAL") &&
			(value.type == undefined || value.type == "summary" || value.type == "full")
		)
	}
}
