export interface ErrorMessageDto {
	field?: string
	value?: any
	message?: string
}

export namespace ErrorMessageDto {
	export function is(value: ErrorMessageDto | undefined) {
		return (
			typeof value == "object" &&
			(value.field == undefined || value.field == "string") &&
			(value.message == undefined || value.message == "string")
		)
	}
}
