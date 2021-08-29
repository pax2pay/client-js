export interface ProcessedStatement {
	timestamp: string
	provider: string
	description: string
	type: "CARD" | "ACCOUNT"
	status: "APPROVED" | "SETTLED" | "DECLINED" | "EXPIRED" | "REVERSED" | "REFUNDED"
	reference?: string
	reason?: string
	transactionAmount?: number
	transactionCurrency?: string
	billingAmount?: number
	billingCurrency?: string
}
