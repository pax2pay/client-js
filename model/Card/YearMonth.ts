export type YearMonth = string

export namespace YearMonth {
	export function is(value: any | YearMonth): value is YearMonth {
		return typeof value == "string" && value.length == 7 && /^\d{4}-((0[1-9])|(1[0-2]))$/.test(value)
	}
	export function parse(value: YearMonth): Date {
		return new Date(value + "28")
	}
	export function create(value: Date): YearMonth {
		return value.toISOString().substring(0, 7)
	}
	export function now(): YearMonth {
		return create(new Date())
	}
}
