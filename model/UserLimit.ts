/**
 * User's limits
 */
export interface UserLimit {
	currency: string
	limit: number
	setBy: "USER" | "CATEGORY"
}
