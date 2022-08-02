const status = ["ACTIVE", "INACTIVE", "DELETED", "PASSWORD_EXPIRED"] as const

export type Status = typeof status[number]

export namespace Status {
	export function is(value: unknown): value is Status {
		return typeof value == "string" && status.includes(value as Status)
	}
}
