export interface ConfigMatchesRequest {
	condition: string
}

export namespace ConfigMatchesRequest {
	export function is(value: ConfigMatchesRequest | any): value is ConfigMatchesRequest {
		return typeof value == "object" && typeof value.condition == "string"
	}
}
