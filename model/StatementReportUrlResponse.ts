import { StatementReportRequest } from "./StatementReportRequest"

export interface StatementReportUrlResponse extends StatementReportRequest {
	url: string
	fileSize: number
}
