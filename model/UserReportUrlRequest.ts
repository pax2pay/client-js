import { UserSearchRequest } from "./UserSearchRequest"

export interface UserReportUrlRequest extends UserSearchRequest {
	fileFormat: string
	locale?: string
}
