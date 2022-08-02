const inclusion = ["INCLUDE", "EXCLUDE", "ONLY"] as const

export type Inclusion = typeof inclusion[number]

export namespace Inclusion {
	export function is(value: unknown): value is Inclusion {
		return typeof value == "string" && inclusion.includes(value as Inclusion)
	}
}
