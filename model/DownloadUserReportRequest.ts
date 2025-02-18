import { DownloadFileFormat } from "./DownloadFileFormat"
import { UserSearchRequest } from "./UserSearchRequest"

export interface DownloadUserReportRequest extends UserSearchRequest {
	fileFormat: DownloadFileFormat
	locale?: string
}
