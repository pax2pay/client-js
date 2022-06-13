export interface AccountBankResponse {
	bankEntity?: string
	address?: string
	city?: string
	country?: string
}

export namespace AccountBankResponse {
	export function is(value: AccountBankResponse | any): value is AccountBankResponse {
		return (
			typeof value == "object" &&
			(value.bankEntity == undefined || typeof value.bankEntity == "string") &&
			(value.address == undefined || typeof value.address == "string") &&
			(value.city == undefined || typeof value.city == "string") &&
			(value.country == undefined || typeof value.country == "string")
		)
	}
}
