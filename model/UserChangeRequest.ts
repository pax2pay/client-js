import { UserLimitsRequest } from "./UserLimitsRequest"

export interface UserChangeRequest {
	firstName: string
	lastName: string
	email: string
	category?: string
	userLimits?: UserLimitsRequest[]
}
