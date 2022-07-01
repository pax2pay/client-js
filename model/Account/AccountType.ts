const accountType = ["FUNDING", "CARD"] as const

export type AccountType = typeof accountType[number]

export namespace AccountType {
	export function is(value: unknown): value is AccountType {
		return typeof value == "string" && accountType.includes(value as AccountType)
	}
}
