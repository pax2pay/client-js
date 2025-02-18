import { DownloadFileFormat } from "./DownloadFileFormat"
import { UserSearchRequest } from "./UserSearchRequest"

export interface UserReportUrlRequest extends UserSearchRequest {
	fileFormat: DownloadFileFormat
	locale?: string
}
