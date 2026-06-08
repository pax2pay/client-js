import { FileUploadedDownloadableResponse } from "./FileUploadedDownloadableResponse"

export interface DownloadableResponse extends FileUploadedDownloadableResponse {
	fileSize: number
	fileName: string
}
