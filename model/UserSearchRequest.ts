import { DateTime } from "isoly"
import { Range } from "./Range"
import { UserStatus } from "./UserStatus"

export interface UserSearchRequest {
	username?: string
	usernameContains?: string
	firstName?: string
	firstNameContains?: string
	lastName?: string
	lastNameContains?: string
	email?: string
	category?: string
	status?: UserStatus[]
	lastLoggedIn?: Range<DateTime>
	roleset?: string
	fuzzySearch?: string
}
