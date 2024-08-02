import { isly } from "isly"

export type UserStatus = typeof UserStatus.types[number]

export namespace UserStatus {
	export const types = ["ACTIVE", "INACTIVE", "DELETED", "PASSWORD_EXPIRED"] as const
	export const type = isly.string<UserStatus>(types)
	export const is = type.is
}
