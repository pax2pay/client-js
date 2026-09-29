import { ErrorMessageDto } from "./ErrorMessageDto"

export interface ErrorResponse {
	code?: number
	errors?: ErrorMessageDto[]
}

export namespace ErrorResponse {
	export function is(value: ErrorResponse | any): value is ErrorResponse {
		return (
			typeof value == "object" &&
			(value.code == undefined || typeof value.code == "number") &&
			(value.errors == undefined || (Array.isArray(value.errors) && value.errors.every(ErrorMessageDto.is))) &&
			(value.code != undefined || value.errors != undefined)
		)
	}
	export const roleMissingCode = 9
	export function isRoleMissing(error?: ErrorResponse): boolean {
		return error?.code == roleMissingCode
	}
	export namespace TwoFa {
		export const incorrectCode = 13
		export function isIncorrect(error?: ErrorResponse): boolean {
			return error?.code == incorrectCode
		}
		export const requiredCode = 14
		export function isRequired(error?: ErrorResponse): boolean {
			return error?.code == requiredCode
		}
	}
	export namespace Document {
		/** 409 while an invoice's document is still being scanned - retry the payment shortly */
		export const notReadyCode = 21
		export function isNotReady(error?: ErrorResponse): boolean {
			return error?.code == notReadyCode
		}
	}
}
