import { StatementReportRequest } from "./StatementReportRequest"
export interface StatementReportUrlRequest extends StatementReportRequest {
	fileFormat: string
	locale?: string
}
