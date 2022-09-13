import { DateTime } from "isoly"

export interface EmailValidationResponse {
	valid?: boolean
	message?: string
	checkedAt?: DateTime
}

export namespace EmailValidationResponse {
	export function is(value: EmailValidationResponse | any): value is EmailValidationResponse {
		return (
			typeof value == "object" &&
			(value.valid == undefined || typeof value.valid == "boolean") &&
			(value.message == undefined || typeof value.message == "string") &&
			(value.checkedAt == undefined || DateTime.is(value.checkedAt))
		)
	}
}
