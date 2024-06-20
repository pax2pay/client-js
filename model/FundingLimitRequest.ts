export interface FundingLimitRequest {
	email: string[]
	limit: number
}
export namespace FundingLimitRequest {
	export function is(value: FundingLimitRequest | any): value is FundingLimitRequest {
		return (
			typeof value == "object" &&
			Array.isArray(value.email) &&
			value.email.every((item: any) => typeof item == "string") &&
			typeof value.limit == "number"
		)
	}
}
