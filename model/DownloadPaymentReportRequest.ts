import { DownloadFileFormat } from "./DownloadFileFormat"
import { PaymentSearch } from "./PaymentSearch"

export interface DownloadPaymentReportRequest extends PaymentSearch {
	fileFormat: DownloadFileFormat
	locale?: string
}
