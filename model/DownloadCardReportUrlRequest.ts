import { CardSearch } from "./CardSearch"
import { DownloadFileFormat } from "./DownloadFileFormat"

export interface DownloadCardReportUrlRequest extends CardSearch {
	fileFormat: DownloadFileFormat
	locale?: string
}
