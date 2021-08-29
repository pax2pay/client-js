/**
 * Funding limit information
 */
export interface FundingLimitResponse {
	message?: string
	status?: "SUCCESS" | "FAILURE"
	email?: string[]
	limit?: number
}
