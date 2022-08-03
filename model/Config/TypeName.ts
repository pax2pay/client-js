const type = ["ORGANISATION", "USER", "ORGANISATION_INTERNAL", "USER_INTERNAL"] as const
export type TypeName = typeof type[number]

export namespace TypeName {
	export function is(value: unknown): value is TypeName {
		return typeof value == "string" && type.includes(value as TypeName)
	}
}
