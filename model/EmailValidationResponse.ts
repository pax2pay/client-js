import { DateTime } from "isoly"

export interface EmailValidationResponse {
	valid?: boolean
	message?: string
	checkedAt?: DateTime
}
