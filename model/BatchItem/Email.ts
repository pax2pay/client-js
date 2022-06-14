export type Email = string

export namespace Email {
	export function is(value: Email | any): value is Email {
		return typeof value == "string" && /^.+@.+$/.test(value)
	}
}
