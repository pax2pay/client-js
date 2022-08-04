import * as isoly from "isoly"

export interface OrganisationCreateBalanceLimitRequest {
	currency: isoly.Currency
	email: string[]
	limit: number
}

export namespace OrganisationCreateBalanceLimitRequest {
	export function is(
		value: OrganisationCreateBalanceLimitRequest | any
	): value is OrganisationCreateBalanceLimitRequest {
		return (
			typeof value == "object" &&
			isoly.Currency.is(value.currency) &&
			Array.isArray(value.email) &&
			value.email.every((item: any) => typeof item == "string") &&
			typeof value.limit == "number"
		)
	}
}
