export interface AmendCardRequest {
	newBalance?: number
	remainingBalance?: number
	balanceDifferential?: number
	currency: string
	fundingDate?: string
}
