export interface ErrorMessageDto {
	field?: string
	value?: any
	message?: string
}

export namespace ErrorMessageDto {
	export function is(value: ErrorMessageDto | undefined) {
		return (
			typeof value == "object" &&
			(value.field == undefined || typeof value.field == "string") &&
			(value.message == undefined || typeof value.message == "string")
		)
	}
}
