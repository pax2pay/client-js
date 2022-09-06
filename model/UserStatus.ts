export const userStatus = ["ACTIVE", "INACTIVE", "DELETED", "PASSWORD_EXPIRED"] as const

export type UserStatus = typeof userStatus[number]

export namespace UserStatus {
	export function is(value: unknown): value is UserStatus {
		return typeof value == "string" && userStatus.includes(value as UserStatus)
	}
}
