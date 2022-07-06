export interface PasswordChangeRequest {
	username?: string
	newPassword: string
	oldPassword?: string
}

export namespace PasswordChangeRequest {
	export function is(value: PasswordChangeRequest | any): value is PasswordChangeRequest {
		return (
			typeof value == "object" &&
			(value.username == undefined || typeof value.username == "string") &&
			typeof value.newPassword == "string" &&
			(value.oldPassword == undefined || typeof value.oldPassword == "string")
		)
	}
}
