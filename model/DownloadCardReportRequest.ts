import { CardSearch } from "./CardSearch"
import { DownloadFileFormat } from "./DownloadFileFormat"

export interface DownloadCardReportRequest extends CardSearch {
	fileFormat: DownloadFileFormat
	locale?: string
}
