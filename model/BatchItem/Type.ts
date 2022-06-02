export type Type = "card" | "transfer"

export namespace Type {
	export function is(value: Type | any): value is Type {
		return value == "card" || value == "transfer"
	}
}
