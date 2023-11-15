export interface SecurityConfig {
	enforce2fa: boolean
}
export namespace SecurityConfig {
	export function is(value: SecurityConfig | any): value is SecurityConfig {
		return typeof value == "object" && typeof value.enforce2fa == "boolean"
	}
}
