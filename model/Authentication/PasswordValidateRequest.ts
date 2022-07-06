export interface PasswordValidateRequest {
	password: string
}

export namespace PasswordValidateRequest {
	export function is(value: PasswordValidateRequest | any): value is PasswordValidateRequest {
		return typeof value == "object" && typeof value.password == "string"
	}
}
