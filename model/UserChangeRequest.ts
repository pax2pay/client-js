import { UserLimitsRequest } from "./UserLimitsRequest"

export interface UserChangeRequest {
	firstName: string
	lastName: string
	email: string
	category?: string
	status?: "ACTIVE" | "INACTIVE" | "DELETED" | "PASSWORD_EXPIRED"
	userLimits?: UserLimitsRequest[]
}
