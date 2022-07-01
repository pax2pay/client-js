/**
 * Represents a balance and currency configured by a superadmin that is used to validate the organisation account balances do not exceed this defined limit.
 */
export interface OrganisationBalanceLimitResponse {
	email?: string[]
	currency?: string
	limit?: number
}

export namespace OrganisationBalanceLimitResponse {
	export function is(value: OrganisationBalanceLimitResponse | any): value is OrganisationBalanceLimitResponse {
		return (
			typeof value == "object" &&
			(value.email == undefined || typeof value.email == "string") &&
			(value.currency == undefined || typeof value.currency == "string") &&
			(value.limit == undefined || typeof value.limit == "number")
		)
	}
}
