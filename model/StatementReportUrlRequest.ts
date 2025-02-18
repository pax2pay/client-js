import { DownloadFileFormat } from "./DownloadFileFormat"
import { StatementReportRequest } from "./StatementReportRequest"
export interface StatementReportUrlRequest extends StatementReportRequest {
	fileFormat: DownloadFileFormat
	locale?: string
}
