import { DownloadFileFormat } from "./DownloadFileFormat"
import { StatementReportRequest } from "./StatementReportRequest"
export interface DownloadStatementReportRequest extends StatementReportRequest {
	fileFormat: DownloadFileFormat
	locale?: string
}
