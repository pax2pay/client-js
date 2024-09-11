const accountState = [
	"ACTIVE",
	"INACTIVE",
	"CANCELLED",
	"EXPIRED",
	"PENDING",
	"APPROVED",
	"DECLINED",
	"GENERATED",
] as const

export type AccountState = typeof accountState[number]

export namespace AccountState {
	export function is(value: unknown): value is AccountState {
		return typeof value == "string" && accountState.includes(value as AccountState)
	}
}
