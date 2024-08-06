import { Date } from "isoly"
import { isly } from "isly"
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

export namespace UserSearchRequest {
	export const type = isly.object<UserSearchRequest>({
		username: isly.string().optional(),
		usernameContains: isly.string().optional(),
		firstName: isly.string().optional(),
		firstNameContains: isly.string().optional(),
		lastName: isly.string().optional(),
		lastNameContains: isly.string().optional(),
		email: isly.string().optional(),
		category: isly.string().optional(),
		status: isly.array(UserStatus.type.optional()),
		lastLoggedIn: isly.fromIs<Range<Date>>(
			"DateRange",
			(value: any) => Range.is(value) && (value.start || value.end) && value.start < value.end
		),
		roleset: isly.string().optional(),
		fuzzySearch: isly.string().optional(),
	})
	export const flaw = type.flaw
	export const is = type.is
}
