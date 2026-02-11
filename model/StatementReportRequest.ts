import * as isoly from "isoly"
import { Inclusion } from "./Inclusion"
import { ProviderCode } from "./ProviderCode"
import { StatementReportRowActionType } from "./StatementReportRowActionType"
import { StatementReportSubType } from "./StatementReportSubType"

export interface StatementReportRequest {
	providerCode: ProviderCode
	providerAccountId: string
	dateRange?: {
		start: isoly.DateTime
		end: isoly.DateTime
	}
	actionTypes?: StatementReportRowActionType[]
	type?: "summary" | "full"
	subType?: StatementReportSubType
	rebateTransfers?: Inclusion
}
