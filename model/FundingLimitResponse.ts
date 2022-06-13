/**
 * Funding limit information
 */
export interface FundingLimitResponse {
	message?: string
	status?: "SUCCESS" | "FAILURE"
	email?: string[]
	limit?: number
}

export namespace FundingLimitResponse {
	export function is(value: FundingLimitResponse | any): value is FundingLimitResponse {
		return (
			typeof value == "object" &&
			(value.message == undefined || typeof value.message == "string") &&
			(value.status == undefined || value.status == "SUCCESS" || value.status == "FAILURE") &&
			(value.email == undefined ||
				(Array.isArray(value.email) && value.email.every((item: any) => typeof item == "string"))) &&
			(value.limit == undefined || typeof value.limit == "number")
		)
	}
}
