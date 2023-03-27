import { Date } from "isoly"
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
	lastLoggedIn?: Range<Date>
	roleset?: string
	fuzzySearch?: string
}
