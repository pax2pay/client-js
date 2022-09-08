import * as isoly from "isoly"

export interface EmailValidationResponse {
	valid: boolean
	message: string
	checkedAt: isoly.DateTime
}
