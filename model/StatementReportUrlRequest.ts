import { StatementReportRequest } from "./StatementReportRequest"
export interface StatementReportUrlRequest extends StatementReportRequest {
	downloadFileFormat: string
	locale: string
}
