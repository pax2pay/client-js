import { UserLimitsRequest } from "./UserLimitsRequest"
import { UserStatus } from "./UserStatus"

export interface UserChangeRequest {
	firstName: string
	lastName: string
	email: string
	category?: string
	status?: UserStatus
	userLimits?: UserLimitsRequest[]
}
