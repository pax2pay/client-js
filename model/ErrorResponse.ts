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
}
