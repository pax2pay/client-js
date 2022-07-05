export interface PasswordValidateResponse {
	result?: "PASS" | "FAIL"
	feedback?: string
}

export namespace PasswordValidateResponse {
	export function is(value: PasswordValidateResponse | any): value is PasswordValidateResponse {
		return (
			typeof value == "object" &&
			(value.result == undefined || value.result == "PASS" || value.result == "FAIL") &&
			(value.feedback == undefined || typeof value.feedback == "string")
		)
	}
}
